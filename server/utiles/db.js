const mongoose = require("mongoose");

module.exports.dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, { useNewURLParser: true });
    console.log("database connected ......");
  } catch (error) {
    console.log(error.message);
  }
};
