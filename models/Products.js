import mongoose from "mongoose";

// Define the product schema
const productSchema = new mongoose.Schema({
  title: { type: String, required: true }, 
  name: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: String, required: true },
  category: { type: String, required: true },
});

// Create the Product model
const Product = mongoose.model("Product", productSchema);

export default Product;
