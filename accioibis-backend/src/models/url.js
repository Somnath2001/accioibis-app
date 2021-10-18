const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema(
  {
    videoname: {
      type: String,
      unique: true,
    },
    videourl: {
      type: String,
    },
  },
  { timestamps: true }
);

const urlData = mongoose.model("urlData", urlSchema);
module.exports = urlData;
