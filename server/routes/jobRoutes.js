const express = require("express");
const {
  getAllJobs,
  createJob,
  updateJob,
  getJobsByName,
} = require("./../controllers/jobController");

const router = express.Router();

router.route("/").get(getAllJobs).post(createJob);

router.route("/specific").get(getJobsByName);

router.route("/:id").patch(updateJob);

module.exports = router;
