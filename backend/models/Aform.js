const mongoose = require("mongoose");
const formSchema = mongoose.Schema({
  name: String,
  nParticipants: String,
  desc: String,
  date: String,
  time: String,
  venue: String,
  approved: Boolean,
  refreshments: String,
  name2: String,
  email: String
});
module.exports = mongoose.model("Event", formSchema);
