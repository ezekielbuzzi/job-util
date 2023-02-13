const mongoose = require("mongoose");

module.exports = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      `Database connection successful: ${conn.connection.host}`.yellow
    );
  } catch (err) {
    console.log(err);
  }
};
