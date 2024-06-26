const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const UserRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute")
const productRoute = require("./routes/productRoute")
const cartRoute = require("./routes/cartRoute")
const orderRoute = require("./routes/orderRoute");
const stripeRoute = require("./routes/stripeRoute")
const cors = require("cors");


dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => (
    console.log("Database Connected")
)).catch((err) => {
    console.log("Error Connecting to DB", err)
})

app.use(cors());
app.use(express.json())


app.use("/api/auth", authRoute);
app.use("/api/users", UserRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));