const UserModel = require("../models/UserModel");
const User = require("../models/UserModel");
const CryptoJS = require("crypto-js")

const router = require("express").Router();

// Register 
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CrytoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(500).json(err)
    }
})

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json("Wrong Credentials");
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);

        const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        Originalpassword !== req.body.password && res.status(401).json("Wrong Credentials");

        const { password, ...others } = user._doc;

        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports = router