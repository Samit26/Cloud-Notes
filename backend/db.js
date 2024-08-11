const mongoose = require("mongoose");

const URI =
  "mongodb+srv://samitkhedekar2594:WlPLXEyqmK33T56D@cluster0.o1mfquc.mongodb.net/";

const connectToDb = async () => {
  const data = await mongoose.connect(URI);
  console.log("Successfully Connect to DB");
};

module.exports = connectToDb;
