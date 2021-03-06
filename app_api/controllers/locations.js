const loc = require('../models/locations');

const locationsListByDistance = async (req, res) => {
    var lng = parseFloat(req.query.lng);
    var lat = parseFloat(req.query.lat);
    const maxDistance = parseFloat(req.query.maxDis);
    lng = 72.3;
    lat = 18.2;
    const near = {
        type: 'Point',
        coordinates: [lng, lat]
    };
    const geoOptions = {
        distanceField: 'distance.calculated',
        key: 'coords',
        spherical: true,
        maxDistance: 200000,
        $limit: 10
    };
    try {
        const results = await loc.aggregate([
            {
                $geoNear: {
                    near,
                    ...geoOptions
                }
            }
        ]);
        const locations = results.map(result => {
            return {
                _id: result._id,
                name: result.name,
                address: result.address,
                rating: result.rating,
                facilities: result.facilities,
                distance: `${result.distance.calculated.toFixed()}`
            };
        });
        res.status(200).json(locations);
    } catch (err) {
        res.status(404).json(err);
    }
};

const locationsCreate = (req, res) => {
    loc.create({
        name: req.body.name,
        address: req.body.address,
        facilities: req.body.facilities.split(','),
        coords: {
            type: 'Point',
            coordinates: [
                parseFloat(req.body.lng),
                parseFloat(req.body.lat)
            ]
        },
        openingTimes: [{
            days: req.body.days1,
            opening: req.body.opening1,
            closing: req.body.closing1,
            closed: req.body.closed1
        }, {
            days: req.body.days2,
            opening: req.body.opening2,
            closing: req.body.closing2,
            closed: req.body.closed2
        }],
    }, (err, location) => {
        if (err)
            return res.status(400).json(err);
        return res.status(201).json(location);
    });
};

const locationsReadOne = (req, res) => {
    loc.findById(req.params.locationid).exec((err, location) => {
        if (!location)
            return res.status(404).json({ 'message': 'location not found' });
        if (err)
            return res.status(404).json(err);
        return res.status(200).json(location);
    });
};

const locationsUpdateOne = (req, res) => {
    if (!req.params.locationid)
        return res.status(400).json({ 'message': 'Location id required' });
    loc.findById(req.params.locationid)
        .select('-reviews -rating')
        .exec((err, location) => {
            if (err)
                return res.status(400).json(err);
            if (!location)
                return res.status(400).json({ 'message': 'Location not found' });
            location.name = req.body.name;
            location.address = req.body.address;
            location.facilities = req.body.facilities;
            location.coords = {
                type: 'Point',
                coordinates: [
                    parseFloat(req.body.lng),
                    parseFloat(req.body.lat)
                ]
            };
            location.openingTimes = [{
                days: req.body.days1,
                opening: req.body.opening1,
                closing: req.body.closing1,
                closed: req.body.closed1
            }, {
                days: req.body.days2,
                opening: req.body.opening2,
                closing: req.body.closing2,
                closed: req.body.closed2
            }];
            location.save((err, location) => {
                if (err)
                    return res.status(400).json(err);
                return res.status(200).json(location);
            });
        });
};

const locationsDeleteOne = (req, res) => {
    const locationId = req.params.locationid;
    if (!locationId)
        return res.status(404).json({ 'message': 'Lotion id required' });
    loc.findByIdAndRemove(locationId)
        .exec((err, location) => {
            if (err)
                return res.status(404).json(err);
            return res.status(204).json(null);
        });
};

module.exports = {
    locationsListByDistance,
    locationsCreate,
    locationsReadOne,
    locationsUpdateOne,
    locationsDeleteOne
}