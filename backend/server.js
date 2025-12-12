/**
 * Yhuri Best Shop Backend Server
 * @author geloxh
 */

import express from "express";
import dotenv from "dotenv";

import productRoutes from "./presentation/routes/productRoutes.js";
import { connectDB } from "./config/database.js";

const app = express();
app.use(express.json());

// db
connectDB();

// Routes
app.use("/api/products", productRoutes);

// Start Server
app.listen(process.env.PORT || 5000, () =>
    console.log(`Server running on port ${process.env.PORT}`)
);