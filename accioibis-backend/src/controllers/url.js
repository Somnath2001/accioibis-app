const urlData = require("../models/url");

exports.urldata = (req, res) => {
  urlData
    .find()
    .then((data) => {
      return res.status(201).json(data);
    })
    .catch((err) => {
      return res.status(404).send("An Error occured while fetching the video");
    });
};

exports.uploadurl = (req, res) => {
  const { videoname, url } = req.body;
  urlinstance = new urlData({
    videoname: videoname,
    videourl: url,
  });

  urlinstance
    .save()
    .then(() => {
      return res.status(200).json("video uploaded successfully");
    })
    .catch((err) => {
      res.status(404).send("Error while uploading video");
    });
};
