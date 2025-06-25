const connection = require('../config/database'); // import connection to db

const getHomepage = (req, res) => {
    return res.render('home.ejs');
};

const renderSample = (req, res) => {
    res.render('sample.ejs');
};

module.exports = {
    getHomepage,
    renderSample
};
