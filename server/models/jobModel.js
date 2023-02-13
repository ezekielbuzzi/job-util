const { time } = require("console");
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },

  type: {
    type: String,
  },

  date: {
    type: String,
  },

  time: {
    type: String,
  },

  answer: {
    type: String,
  },
});

module.exports = mongoose.model("Job", jobSchema);
