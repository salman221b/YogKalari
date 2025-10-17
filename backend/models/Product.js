import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    images: [{ type: String, required: true }], // multiple images
    rating: { type: Number },
    reviews: { type: String },
    description: { type: String },
    category: { type: String },
    isLimited: { type: Boolean, default: false },
    isRecommended: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
