const homeList = (req, res) => {
    res.render('locations-list', { title: 'Home' });
};

const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location Info' });
};

const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add Review' });
};

module.exports = {
    homeList,
    locationInfo,
    addReview
};