import mongoose from "mongoose";

const { Schema } = mongoose;

const cartSchema = new Schema({
  customerID: Number,
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

export default mongoose.models.Cart || mongoose.model("Cart", cartSchema);
// Title: String,
// Description: String,
// Price: Number,
// ProductID: Number,
// Imagelink: String,
// Stock: Boolean,
