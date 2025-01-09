import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies

// CORS Configuration
app.use(
  cors({
    origin: "*", // Replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Environment Variables
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is missing

if (!MONGO_URI) {
  console.error("Error: MONGO_URI is undefined. Check your .env file.");
  process.exit(1);
}

// MongoDB Schema and Model
const formSchema = new mongoose.Schema({
  customerDetails: {
    name: String,
    address: String,
    email: String,
    gstNo: String,
    serviceNumber: String,
    serviceCharge: String,
    phone: String,
    mobile: String,
  },
  serviceDetails: {
    brand: String,
    device: String,
    model: String,
    serialNumber: String,
    tested: String,
    serviceType: String,
  },
  voltageAndStatus: {
    inputVoltage: String,
    controlVoltage: String,
    supplyStatus: String,
    voltageArea: String,
  },
  details: {
    details: String,
    reason: String,
    problemDuringVisit: String,
    solution: String,
    remarks: String,
  },
  engineerAndRepresentative: {
    engineerName: String,
    engineerMobile: String,
    representativeName: String,
    representativeMobile: String,
  },
  signatures: {
    customerName: String,
    serviceBy: String,
    dateTime: Date,
  },
});

const FormData = mongoose.model("FormData", formSchema);

// MongoDB Connection
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  });

// Routes
app.post("/submit", async (req, res) => {
  try {
    const formData = new FormData(req.body); // Create a new document using the schema
    const savedData = await formData.save(); // Save the document to MongoDB
    res.status(200).json({ message: "Form data saved successfully!", data: savedData });
  } catch (error) {
    console.error("Error saving form data:", error.message);
    res.status(500).json({ message: "Error saving form data", error: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("Server running");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
