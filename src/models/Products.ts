import mongoose from "mongoose";

const { Schema } = mongoose;

const productsSchema = new Schema({
  Title: String,
  Description: String,
  Price: Number,
  ProductID: Number,
  Imagelink: String,
  Stock: Boolean,
});

export default mongoose.models.Product ||
  mongoose.model("Product", productsSchema);
