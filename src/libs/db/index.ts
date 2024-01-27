import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.dataBaseUrl!, {
      dbName: "Ecommerce",
    });
  } catch (error) {
    console.log("Error in conncecting DB", error);
  }
};
export default connect;
