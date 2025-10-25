import express from "express";
import Product from "../models/Product.js";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

/* ---------------------- CLOUDINARY CONFIG ---------------------- */
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

/* ---------------------- MULTER STORAGE SETUP ---------------------- */
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "YOGKALARISAMRIDDHI/products",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});
const parser = multer({ storage });

/* ---------------------- ROUTES ---------------------- */

// ✅ Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, products });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to fetch products" });
  }
});

// ✅ Get single product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ success: false, message: "Product not found" });

    res.json({ success: true, product });
  } catch (err) {
    console.error("Error fetching product:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ Add new product
router.post("/", parser.array("images", 5), async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      placement,
      gifting,
      stock,
      category,
      isLimited,
      isRecommended,
      titleAndValues, // Expect JSON string
    } = req.body;

    const imageUrls = req.files.map((file) => file.path);

    // Parse titleAndValues if it's a JSON string from frontend
    let parsedTitleValues = [];
    try {
      if (titleAndValues) {
        parsedTitleValues = JSON.parse(titleAndValues);
      }
    } catch (err) {
      console.warn("Invalid titleAndValues JSON");
    }

    const newProduct = new Product({
      name,
      description,
      price,
      images: imageUrls,
      placement,
      gifting,
      stock: stock ? Number(stock) : 0,
      category,
      isLimited: isLimited === "true" || isLimited === true,
      isRecommended: isRecommended === "true" || isRecommended === true,
      titleAndValues: parsedTitleValues,
    });

    await newProduct.save();
    res.status(201).json({ success: true, product: newProduct });
  } catch (err) {
    console.error("Add Product Error:", err);
    res.status(500).json({ success: false, message: "Failed to add product" });
  }
});

// ✅ Update product (with or without new images)
router.put("/:id", parser.array("images", 5), async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ success: false, message: "Product not found" });

    // Handle images
    let imageUrls = product.images;
    if (req.files && req.files.length > 0) {
      imageUrls = req.files.map((file) => file.path);
    }

    const {
      name,
      description,
      price,
      placement,
      gifting,
      stock,
      category,
      isLimited,
      isRecommended,
      titleAndValues,
    } = req.body;

    let parsedTitleValues = [];
    try {
      if (titleAndValues) parsedTitleValues = JSON.parse(titleAndValues);
    } catch (err) {
      console.warn("Invalid titleAndValues JSON in update");
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        price,
        images: imageUrls,
        placement,
        gifting,
        stock: stock ? Number(stock) : 0,
        category,
        isLimited: isLimited === "true" || isLimited === true,
        isRecommended: isRecommended === "true" || isRecommended === true,
        titleAndValues: parsedTitleValues,
      },
      { new: true }
    );

    res.status(200).json({ success: true, product: updatedProduct });
  } catch (err) {
    console.error("Update Error:", err);
    res.status(500).json({ success: false, message: "Update failed" });
  }
});

// ✅ Delete product
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ success: false, message: "Product not found" });

    // Delete images from Cloudinary
    if (product.images && product.images.length > 0) {
      for (let url of product.images) {
        const publicId = url.split("/").pop().split(".")[0];
        try {
          await cloudinary.uploader.destroy(`YOGKALARISAMRIDDHI/products/${publicId}`);
        } catch (err) {
          console.warn("Failed to delete Cloudinary image:", publicId);
        }
      }
    }

    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Product deleted successfully" });
  } catch (err) {
    console.error("Delete Error:", err);
    res.status(500).json({ success: false, message: "Delete failed" });
  }
});

export default router;
