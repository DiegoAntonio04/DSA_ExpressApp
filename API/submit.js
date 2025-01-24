const express = require('express'); 
const router = express.Router();
const Form = require('../Models/PokeIndex'); // Corrected path

// POST route for submitting data
router.post("/", async (req, res) => {
    const { name, age, email, favoritePokemon } = req.body;

    try {
        const FormEntry = new Form({
            name,
            age,
            email,
            favoritePokemon
        });
       const saveEntry = await FormEntry.save();

        console.log("Saved Data:",saveEntry);
        res.status(200).json({ message: "Data received" });
        
    } catch (error) {
        console.error("Error saving data:", error);

        //If email already exists
        if (error.code === 11000) {
            res.status(400).json({ message: "Email already exists" });
        } else {
            res.status(500).json({ message: "Error saving data", error });
        }
    }
    
    }
);

module.exports = router;