//  import express from "express";
//  import dotenv from 'dotenv';
// dotenv.config();
// import cors from 'cors';
// import mongoose from 'mongoose';

//  const app=express();

// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://Resolution:Tanvi1234@cluster0.punrz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// mongoose.connect(MONGODB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch((error) => {
//     console.error('Error connecting to MongoDB:', error.message);
// });
// // Define Schema and Model
// const formSchema = new mongoose.Schema({
//     customerDetails: {
//         name: String,
//         address: String,
//         email: String,
//         gstNo: String,
//         serviceNumber: String,
//         serviceCharge: String,
//         phone: String,
//         mobile: String,
//     },
//     serviceDetails: {
//         brand: String,
//         device: String,
//         model: String,
//         serialNumber: String,
//         tested: String,
//         serviceType: String,
//     },
//     voltageAndStatus: {
//         inputVoltage: String,
//         controlVoltage: String,
//         supplyStatus: String,
//         voltageArea: String,
//     },
//     details: {
//         details: String,
//         reason: String,
//         problemDuringVisit: String,
//         solution: String,
//         remarks: String,
//     },
//     engineerAndRepresentative: {
//         engineerName: String,
//         engineerMobile: String,
//         representativeName: String,
//         representativeMobile: String,
//     },
//     signatures: {
//         customerName: String,
//         serviceBy: String,
//         dateTime: String,
//     },
// });

// const FormData = mongoose.model('FormData', formSchema);

// // Routes
// app.post('/submit', async (req, res) => {
//     try {
//         const formData = new FormData(req.body);
//         const savedData = await formData.save();
//         res.status(200).json({ message: 'Form data saved successfully!', data: savedData });
//     } catch (error) {
//         console.error('Error saving form data:', error);
//         res.status(500).json({ message: 'Error saving form data', error });
//     }
// });

// app.get('/',(req,res)=>{
//     res.send("server running")
// })

// // Start Server
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://Resolution:Tanvi1234@cluster0.punrz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});

// Define Schema and Model
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
        dateTime: String,
    },
});

const FormData = mongoose.model('FormData', formSchema);

// Routes
app.post('/submit', async (req, res) => {
    try {
        const formData = new FormData(req.body); // Get the form data from the request body
        const savedData = await formData.save(); // Save the data to MongoDB
        res.status(200).json({ message: 'Form data saved successfully!', data: savedData }); // Return success message
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).json({ message: 'Error saving form data', error });
    }
});

app.get('/', (req, res) => {
    res.send("server running");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
