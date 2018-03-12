const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
  id: String,
  text: String,
  timestamp: Date,
  isRead: Boolean,
  userId: String,
  userName: String,
  userScreenName: String
});

module.exports = mongoose.model("Tweet", tweetSchema);