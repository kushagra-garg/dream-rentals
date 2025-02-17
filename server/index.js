const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/auth.js");
const listingRoutes = require("./routes/listing.js");

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use("/auth", authRoutes);
app.use("/properties", listingRoutes);

// Mongoose setup
const PORT = 3001;
mongoose.connect(process.env.MONGO_URL, {
    dbName: "Dream_Nest"
})
.then(() => {
    app.listen(PORT, () => console.log(`server port: ${PORT}`));
}).catch((err) => console.log(`${err} did not connect`));