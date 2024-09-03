require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const { errorHandler } = require("./middleware/errorHandler");

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Body parser

// Routes
app.use("/api/users", userRoutes);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;
