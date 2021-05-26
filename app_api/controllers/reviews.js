const loc = require('../models/locations');
const { locationsCreate } = require('./locations');
const User = require('../models/users');

const doAddReview = (req, res, location, author) => {
    if (!location)
        return res.status(400).json({ 'message': 'Location not found' });
    const { rating, reviewText } = req.body;
    location.reviews.push({
        author,
        rating,
        reviewText
    });
    location.save((err, location) => {
        if (err)
            return res.status(400).json(err);
        updateAverageRating(location._id);
        return res.status(201).json(location.reviews[location.reviews.length - 1]);
    })
};

const doSetAverageRating = (location) => {
    const count = location.reviews.length;
    const total = location.reviews.reduce((acc, { rating }) => {
        return acc + rating;
    }, 0);
    if (count !== 0)
        location.rating = parseInt(total / count, 10);
    else
        location.rating = 0;
    location.save((err) => {
        if (err)
            console.log(err);
        else
            console.log(`Average rating changed to ${location.rating}`);
    });
};

const updateAverageRating = (locationId) => {
    loc.findById(locationId).select('rating reviews').exec((err, location) => {
        if (!err)
            doSetAverageRating(location);
    });
};

const reviewsListByDistance = (req, res) => {
    res.status(200).json({ 'status': 'success' });
};


const getAuthor = (req, res, callback) => {
    if (req.payload && req.payload.email) {
        User.findOne({ email: req.payload.email }).exec((err, user) => {
            if (!user)
                return res.status(404).json({ 'message': 'user not found' });
            if (err)
                return res.status(404).json(err);
            callback(req, res, user.name);
        });
    }
    else {
        return res.status(404).json({ 'message': 'user not found' });
    }
};

const reviewsCreate = (req, res) => {
    getAuthor(req, res, (req, res, username) => {
        const locationid = req.params.locationid;
        if (locationid) {
            loc.findById(locationid)
                .select('reviews')
                .exec((err, location) => {
                    if (err)
                        return res.status(400).json(err);
                    doAddReview(req, res, location, username);
                });
        } else {
            res.status(404).json({ 'message': 'Location not found' });
        }
    });
};

const reviewsReadOne = (req, res) => {
    loc.findById(req.params.locationid)
        .select('name reviews')
        .exec((err, location) => {
            if (err)
                return res.status(200).json(err);
            if (!location)
                return res.status(200).json({ 'message': 'location not found' });
            if (location.reviews && locationsCreate.reviews.length > 0) {
                const review = location.reviews.id(req.params.reviewid);
                if (!review)
                    return res.status(404).json({ 'message': 'Review not found' });
                res.status(200).json({
                    'location': {
                        name: location.name,
                        id: req.params.locationid
                    },
                    review
                })
            } else {
                return res.status(404).json({ 'message': 'No reviews found' });
            }
        });
};

const reviewsUpdateOne = (req, res) => {
    if (!req.params.locationid || !req.params.reviewid)
        return res.status(404).json({ 'message': 'Locationid and reviewid required' });
    loc.findById(req.params.locationid)
        .select('reviews')
        .exec((err, location) => {
            if (err)
                return res.status(404).json(err);
            if (!location)
                return res.status(404).json({ 'message': 'Location not found' });
            if (!location.reviews || location.reviews.length === 0)
                return res.status(404).json({ 'message': 'Reviews not found' });
            const thisReview = location.reviews.id(req.params.reviewid);
            if (!thisReview)
                return res.status(404).json({ 'message': 'Review not found' });
            thisReview.author = req.body.author;
            thisReview.rating = req.body.rating;
            thisReview.reviewText = req.body.reviewText;
            location.save((err, location) => {
                if (err)
                    return res.status(404).json(err);
                updateAverageRating(location._id);
                return res.status(200).json(thisReview);
            });

        });
};

const reviewsDeleteOne = (req, res) => {
    if (!req.params.locationid || !req.params.reviewid)
        return res.status(404).json({ 'message': 'Locationid and reviewid required' });
    const { locationid, reviewid } = req.params;
    loc.findById(locationid)
        .select('reviews')
        .exec((err, location) => {
            if (err)
                return res.status(404).json(err);
            if (!location)
                return res.status(404).json({ 'message': 'Location not found' });
            if (!location.reviews || location.reviews.length === 0)
                return res.status(404).json({ 'message': 'Reviews not found' });
            if (!location.reviews.id(reviewid))
                return res.status(404).json({ 'message': 'Review not found' });
            location.reviews.id(reviewid).remove();
            location.save(err => {
                if (err)
                    return res.status(404).json(err);
                updateAverageRating(locationid);
                return res.status(204).json(null);
            })
        });
};

module.exports = {
    reviewsListByDistance,
    reviewsCreate,
    reviewsReadOne,
    reviewsUpdateOne,
    reviewsDeleteOne
}