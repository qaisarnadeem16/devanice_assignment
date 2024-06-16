import mongoose from "mongoose";

const ConnectDb = async () => {
  try {
    const mongUrl =
      "mongodb+srv://faizan:61ebe99c@cluster0.bisjw2n.mongodb.net/";
    await mongoose.connect(mongUrl!);
    console.log(`MongoDB Connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`MongoDb Error : ${error}`);
  }
};

export default ConnectDb;
