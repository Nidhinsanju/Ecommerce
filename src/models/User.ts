import mongoose from "mongoose";
import Cart from "./Cart";

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  customerID: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
