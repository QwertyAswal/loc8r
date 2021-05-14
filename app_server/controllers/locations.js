const homeList = (req, res) => {
    res.render('locations-list', {
        title: 'Loc8r',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'find places to with with wifi near you!'
        },
        sidebar: 'Looking for wifi and seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place youare looking for.',
        locations: [{
            name: 'Starcups',
            address: '221, Badrish Colony, PO Nehru Gram',
            rating: 3,
            facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
            distance: '100m'
        },
        {
            name: 'Cafe Hero',
            address: '221, Badrish Colony, PO Nehru Gram',
            rating: 4,
            facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
            distance: '200m'
        },
        {
            name: 'Burger Queen',
            address: '221, Badrish Colony, PO Nehru Gram',
            rating: 3,
            facilities: ['Hot Drinks', 'Premium Wifi'],
            distance: '150m'
        }]
    });
};

const locationInfo = (req, res) => {
    res.render('location-info', {
        title: 'Starcups',
        rating: 3,
        address: '221, Badrish Colony, PO Nehru Gram, Dehradun',
        facilities: {
            title: 'Facilities',
            list: ['Hot Drinks', 'Food', 'Premium Wifi']
        },
        openHours: {
            title: 'Opening Hours',
            timings: ['Monday - Friday : 7:00am - 7:00pm', 'Saturday : 8:00am - 5:00pm', 'Sunday : closed']
        },
        reviews: [{
            rating: 3,
            author: 'Qwerty Aswal',
            timestamp: '16 February 2017',
            review: 'What a great place.'
        },
        {
            rating: 4,
            author: 'Thumke Dar',
            timestamp: '14 February 2017',
            review: 'It was okay. Coffee wasn\'t great.'
        }],
        sidebar: {
            lead: 'Starcups is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            text: 'If you\'ve been and like it - or if you don\'t - please leave a review to help other people just like you.'
        }
    });
};

const addReview = (req, res) => {
    res.render('location-review-form', {
        title: 'Review Starcups',    
    });
};

module.exports = {
    homeList,
    locationInfo,
    addReview
};