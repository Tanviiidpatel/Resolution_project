import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"

dotenv.config()

const app = express()

// Middleware
app.use(cors());
app.use(express.json());

// Environment Variables
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT ;

if (!MONGO_URI) {
  console.error("Error: MONGO_URI is undefined. Check your .env file.");
  process.exit(1);
}

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

app.post("/submit", async (req, res) => {
  try {
    const formData = new FormData(req.body);
    const savedData = await formData.save();
    res.status(200).json({ message: "Form data saved successfully!", data: savedData });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ message: "Error saving form data", error });
  }
});

app.get("/", (req, res) => {
  res.send("Server running");
});

// Start Server
app.listen(PORT, () => {
  
  console.log(`Server running on port ${PORT}`);
});
