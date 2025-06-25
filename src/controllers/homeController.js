const getHomepage = (req, res) => {
    res.send('hi')
}
const renderSample = (req , res ) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,renderSample
}