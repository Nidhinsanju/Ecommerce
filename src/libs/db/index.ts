import mongoose from "mongoose";

const connect = async () => {
  const DBConnectionString =
    "mongodb+srv://Nidhin_5656:Nidhin%401606@cluster0.anuhjsu.mongodb.net/";
  try {
    await mongoose.connect(DBConnectionString!, {
      dbName: "Ecommerce",
    });
  } catch (error) {
    console.log("Error in conncecting DB", error);
  }
};
export default connect;
