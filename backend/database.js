const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://sandalijaiswal50:1234567890@cluster0.jtx63rv.mongodb.net/GoFoodMern?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Mongo Successfully!");
    fetchData();
  } catch (error) {
    console.log("err:", error);
    process.exit();
  }
};
async function fetchData() {
  try {
    const fetched_data = mongoose.connection.db.collection("sample");
    const data = await fetched_data.find({}).toArray();
    //if (err) console.log(err);
    //console.log(data);
  } catch (error) {
    console.log("err:", error);
    process.exit();
  }
}

module.exports = mongoDB;
