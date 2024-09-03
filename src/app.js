require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yaml");

const file = fs.readFileSync("./swagger.yaml", "utf8");
const swaggerDocument = YAML.parse(file);

swaggerDocument.servers = [
  {
    url: `${process.env.DEPLOYED_URL}/api`,
    description: "Deployment server",
  },
  {
    url: `http://localhost:${process.env.PORT || 5000}/api`,
    description: "Local server",
  },
];
const userRoutes = require("./routes/userRoutes");
const peopleRoutes = require("./routes/peopleRoutes");
const { errorHandler } = require("./middleware/errorHandler");

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Body parser

// Routes
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/users", userRoutes);
app.use("/api/people", peopleRoutes);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;
