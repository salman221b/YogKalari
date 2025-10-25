import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    titleAndValues: [
      {
        title: { type: String, required: true },
        value: { type: String, required: true },
      },
    ],
    description: { type: String },
    price: { type: String, required: true },
    images: [{ type: String, required: true }],

    placement: { type: String },   // new field
    gifting: { type: String },     // new field
    stock: { type: Number, default: 0 },

    category: { type: String },
    isLimited: { type: Boolean, default: false },
    isRecommended: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
