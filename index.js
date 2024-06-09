const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const UserRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute")

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => (
    console.log("Database Connected")
)).catch((err) => {
    console.log("Error Connecting to DB", err)
})

app.use(express.json())
// routes
app.use("/api/auth", authRoute);
app.use("/api/users", UserRoute);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));