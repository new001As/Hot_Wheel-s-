const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    "mongodb+srv://Rent_bike:87651234@cluster0.u96x9bw.mongodb.net/?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );

  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("Mongo DB Connection Successfull");
  });

  connection.on("error", () => {
    console.log("Mongo DB connection Error");
  });
}

connectDB();

module.exports = mongoose;
