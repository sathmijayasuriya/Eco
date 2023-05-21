import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import fileUpload from "express-fileupload";
// Route imports
import imageUploadRoute from "./routes/imageUploadRoute.js";
import adminRoute from "./routes/admin.js";
import userRoute from "./routes/user.js";
import adminController from "./controllers/admin.js";


const { connect } = mongoose;

// Connect MongoDB.
mongoose.set("strictQuery", false);
const URI = process.env.MONGODB_URL;
connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.set("trust proxy", 1);
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port} 🔥`);
});





//Middleware
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next(); // allow access to the next middleware/route handler
  } else {
    res.status(403).json({ message: "Unauthorized" });
  }
};

// Routes
app.use("/api", imageUploadRoute);
app.use(userRoute);
app.use("/admin", isAdmin, adminRoute); // Apply isAdmin middleware to admin routes

// Protected admin route
app.get("/admin/dashboard", isAdmin, adminController.getDashboard);
