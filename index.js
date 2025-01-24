const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
//
const https= require('http');
const server= https.createServer(app);


// Middleware
app.use(cors());
app.use(express.json());

// Serve HTML page
app.get('/submit', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Server Status</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
        }
        h1 {
            color: #333;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <h1>Server is running</h1>
</body>
</html>
    `);
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
app.use('/submitFave', submit);

//Start Serverrrr

const PORT = process.env.PORT ||3000

app.listen(PORT, () => {    
    console.log(`Server is running on port ${PORT}`);
});