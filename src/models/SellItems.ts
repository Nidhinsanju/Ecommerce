import mongoose from "mongoose";

const { Schema } = mongoose;

const sellItemSchema = new Schema({
  Title: String,
  Description: String,
  ProductID: Number,
  Imagelink: String,
  Category: String,
});

export default mongoose.models.Sellitem ||
  mongoose.model("Sellitem", sellItemSchema);
