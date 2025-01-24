const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
//
const http= require('http');
const server= http.createServer(app);


// Middleware
app.use(cors());
app.use(express.json());

// Serve HTML page
app.get('/', (req, res) => {
    res.send(`Server is running`);
});

// Connect to MongoDB
mongoose.connect('mongodb+srv://DSA_ANTONIO_FP:diegoantonio04@antoniodiego04.mj0os.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('MongoDB Connection Error:', error.message);
    process.exit(1); // Exit process with failure,
});

// Import API
const submit = require('./API/submit');

// Use API
app.use('/submit', submit);

//Start Serverrrr

const PORT = process.env.PORT || 5000;


server.listen(PORT, () => {    
    console.log(`Server is running on port ${PORT}`);
});