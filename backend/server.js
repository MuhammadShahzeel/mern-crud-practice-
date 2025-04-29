import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import productRoute from "./routes/product.route.js";
import cors from "cors";


const app = express();
const port = process.env.PORT || 3000; // Use the port from environment variables or default to 3000
app.use(cors()); 
app.use(express.json()); // Middleware to parse JSON request body
app.use("/api/products", productRoute); // Mount the product route on /products

dotenv.config(); //to load environment variables from .env file

app.listen(port, () => {
  connectDB();
  console.log(`Example app listening on port ${port}`);
});
     