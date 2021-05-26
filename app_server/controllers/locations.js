const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

const renderHomePage = (req, res, body) => {
    let message = null;
    if (!body instanceof Array) {
        message = 'API lookup error';
        body = [];
    }
    else {
        if (!body.length) {
            message = 'No Places Found Nearby';
        }
    }
    res.render('locations-list', {
        title: 'Loc8r',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'find places to with with wifi near you!'
        },
        sidebar: 'Looking for wifi and seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place youare looking for.',
        locations: body,
        message
    });
};

const formatDistance = (distance) => {
    let thisDistance = 0;
    let unit = 'm';
    if (distance > 1000) {
        thisDistance = (distance / 1000).toFixed(1);
        unit = 'km';
    }
    return thisDistance + unit;
};

const homeList = (req, res) => {
    const path = '/api/locations';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
        qs: {
            lng: 71.92599,
            lat: 18.378091,
            maxDis: 2000000000
        }
    };
    request(requestOptions, (err, response, body) => {
        let data = [];
        if (body.length && response.statusCode === 200) {
            data = body.map((item) => {
                item.distance = formatDistance(parseInt(item.distance));
                return item;
            });
        }
        renderHomePage(req, res, data);
    });
};

const renderPageDetails = (req, res, location) => {
    res.render('location-info', {
        title: location.name,
        sidebar: {
            lead: location.name + ' is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            text: 'If you\'ve been and like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location
    });
}

const showError = (req, res, status) => {
    let title = '';
    let content = '';
    if (status === 404) {
        title = '404, page not found';
        content = 'Oh dear. Looks like you can\'t find this page. Sorry'
    } else {
        title = `${status}, something's gone wrong`;
        content = 'Something, somewhere, has gone just a little bit wrong.';
    }
    res.status(status).render('generic-text', {
        title,
        content
    });
}

const getLocationInfo = (req, res, callback) => {
    const path = `/api/locations/${req.params.locationid}`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    }
    request(requestOptions, (err, response, body) => {
        let data = body;
        if (response.statusCode === 200) {
            data.coords = {
                lng: body.coords.coordinates[0],
                lat: body.coords.coordinates[1]
            }
            callback(req, res, data);
        }
        else {
            showError(req, res, response.statusCode);
        }
    })
};

const locationInfo = (req, res) => {
    getLocationInfo(req, res, (req, res, data) => {
        renderPageDetails(req, res, data);
    })
};

const renderReviewForm = (req, res, { name }) => {
    res.render('location-review-form', {
        title: `Review ${name}`,
        error: req.query.err
    });
};

const addReview = (req, res) => {
    getLocationInfo(req, res, (req, res, data) => {
        renderReviewForm(req, res, data);
    });
};

const doAddReview = (req, res) => {
    const locationId = req.params.locationid;
    const path = `/api/locations/${locationId}/reviews`;
    const postData = {
        author: req.body.name,
        rating: parseInt(req.body.rating, 10),
        reviewText: req.body.review
    };
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'POST',
        json: postData,
        qs: {}
    };
    request(requestOptions, (err, response, { name }) => {
        if (response.statusCode === 201) {
            res.redirect(`/location/${locationId}`);
        }
        else if (response.statusCode === 400 && name && name === 'ValidationError') {
            res.redirect(`/location/${locationId}/review/new?err=val`);
        }
        else {
            showError(req, res, response.statusCode);
        }
    });
};

module.exports = {
    homeList,
    locationInfo,
    addReview,
    doAddReview
};