const shortid = require('shortid');
const URL = require('../models/url');

async function handleGenerateNewURL(req, res) {
    console.log("handleGenerateNewURL")
    const body = req.body;
    if (!body) { return res.status(400).json({ error: "url is required" }); }
    else {
        const shortID = shortid()
        await URL.create({
            shortId: shortID,
            redirectUrl: body.url,
            visitHistory: [],
            createdBy: req.user._id
        })
        console.log(shortID, "shortID")
        res.render("home", { id: shortID })  //server side rendering
        // res.json({ 'generated_id': shortID })
    }
}

async function handleGetRedirectionURL(req, res) {
    const shortId = req?.params?.shortUrl;
    const result = await URL.findOneAndUpdate(
        { shortId },
        { $push: { visitHistory: { timeStamp: Date.now() } } }
    )
    result && res.redirect(result.redirectUrl)
}

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortUrl;
    const result = await URL.findOne({ shortId })
    console.log(shortId, result)
    res.json({
        "totalClick": result.visitHistory.length,
        "analytics": result.visitHistory
    })
}
async function handleGetHtmlDoc(req, res) {
    console.log("handleGetHtmlDoc")
    const allUrls = await URL.find({})
    res.render("home", {
        urls: allUrls
    })
}

module.exports = {
    handleGenerateNewURL,
    handleGetAnalytics,
    handleGetRedirectionURL,
    handleGetHtmlDoc
}