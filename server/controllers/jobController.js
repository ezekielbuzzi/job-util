const Jobs = require("./../models/jobModel");

exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Jobs.find();
    res.status(200).json({
      status: "success",
      jobs,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getJobsByName = async (req, res) => {
  try {
    const keyWord = req.query.search;

    if (req.query.search) {
      const jobs = await Jobs.find({
        companyName: { $regex: `^${keyWord}`, $options: "i" },
      });

      res.status(200).json({
        status: "success",
        jobs,
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.createJob = async (req, res) => {
  try {
    const job = await Jobs.create(req.body);

    if (job) {
      res.status(201).json({
        status: "success",
        job,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateJob = async (req, res) => {
  try {
    const job = await Jobs.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (job) {
      res.status(200).json({
        status: "success",
        job,
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
