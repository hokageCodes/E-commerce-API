const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => (
    console.log("Database Connected")
)).catch((err) => {
    console.log("Error Connecting to DB", err)
})



const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));