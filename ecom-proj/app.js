const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const expressValidator = require("express-validator");
const cookieParser = require("cookie-parser");

require("dotenv").config();

//import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");

//app
const app = express();

//db connection
mongoose.connect(process.env.DATABASE).then(() => console.log("DB Connected"));

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(cookieParser());
app.use(cors());

// routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//DATABASE=mongodb+srv://peteronye:NH0BS1X02JxOOywP@devcluster.iyz6p.mongodb.net/devCluster?retryWrites=true&w=majority
