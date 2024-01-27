import mongoose from "mongoose";

const { Schema } = mongoose;

const cartSchema = new Schema({
  Title: String,
  Description: String,
  Price: Number,
  ProductID: Number,
  Imagelink: String,
  Stock: Boolean,
});

export default mongoose.models.Cart || mongoose.model("Cart", cartSchema);
