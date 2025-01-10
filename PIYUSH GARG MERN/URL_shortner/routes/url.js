const express = require('express');
const { handleGenerateNewURL, handleGetAnalytics, handleGetRedirectionURL, handleGetHtmlDoc } = require('../controllers/url');
const router = express.Router();

router.post('/', handleGenerateNewURL) // http://localhost:8001/url/ ==> will generate --> {url:'https://www.google.com}
router.get('/:shortUrl', handleGetRedirectionURL) // http://localhost:8001/url/W2PvaUgqY
router.get('/analytics/:shortUrl', handleGetAnalytics)
router.get('/view/html', handleGetHtmlDoc)

module.exports = router