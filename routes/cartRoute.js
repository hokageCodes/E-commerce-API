const Cart = require("../models/CartModel");
const CryptoJS = require("crypto-js");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

// Create Product
router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body)

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart)
    } catch (error) {
        res.status(500).json(error)
    }
})


// Update Product
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {


    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id, 
            {
                $set: req.body
            },
            {new:true}
        );
        res.status(200).json(updatedCart)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Get ONE User Cart
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const carts = await Cart.findByOne( {userId: req.params.userId} )
        res.status(200).json(carts)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Get ALL
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find()
        res.status(200).json(carts)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Delete Product
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted!")
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router