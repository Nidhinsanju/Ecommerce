import mongoose from "mongoose";

const { Schema } = mongoose;

const dealsSchema = new Schema({
  Title: String,
  Description: String,
  DealPrice: Number,
  ProductID: Number,
  Imagelink: String,
  Stock: Boolean,
});

export default mongoose.models.ProductDeals ||
  mongoose.model("ProductDeals", dealsSchema);
