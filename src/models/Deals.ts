import mongoose from "mongoose";

const { Schema } = mongoose;

const dealsSchema = new Schema({
  Title: String,
  Description: String,
  Price: Number,
  ProductID: Number,
  Imagelink: String,
  DealPrice: Number,
});

export default mongoose.models.ProductDeals ||
  mongoose.model("ProductDeals", dealsSchema);
