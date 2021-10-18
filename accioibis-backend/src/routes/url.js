const express = require("express");

const router = express.Router();
const { urldata, uploadurl } = require("../controllers/url");

//get all videourl
router.get("/getallurl", urldata);

//upload the video url
router.post("/uploadurl", uploadurl);

module.exports = router;
