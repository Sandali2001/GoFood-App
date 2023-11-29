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
    const foodCategory = mongoose.connection.db.collection("foodCategory");
    const catData = await foodCategory.find({}).toArray();
    global.sample = data;
    global.foodCategory = catData;
    //console.log(global.sample);
    // console.log(global.foodCategory);
    //mongoose.connection.close();
  } catch (error) {
    console.log("err:", error);
    process.exit();
  }
}
module.exports = mongoDB;
