import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import productRoute from "./routes/product.route.js";
import cors from "cors"; 


dotenv.config(); //to load environment variables from .env file

const app = express();
const port = process.env.PORT || 5000; // Use the port from environment variables or default to 3000

app.use(cors()); 

app.use(express.json()); // Middleware to parse JSON request body
app.use("/api/products", productRoute); // Mount the product route on /products


app.listen(port, () => {
  connectDB();
  console.log(`Example app listening on port ${port}`);
});
  