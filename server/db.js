const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://test:test@testdb.hpryanm.mongodb.net/Linkfluence";
const ConnecttoMongoDB = () => {
  mongoose.connect(mongoURI).then(() => {
    console.log("MongoDB Connection Succesful!");
  });
};
module.exports = ConnecttoMongoDB;
