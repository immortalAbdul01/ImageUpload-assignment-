const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();

// Set up middleware
app.use(express.json());
app.use(cors());

// Set up MongoDB connection

mongoose.connect(process.env.LINK, () => {
    console.log('connected with mongoose');
})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Set up file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, uuidv4() + ext);
    },
});
const upload = multer({ storage: storage });

// Set up routes
app.post('/upload', upload.single('file'), (req, res) => {
    const file = req.file;
    const newImage = { name: file.filename };
    Image.create(newImage, (err, image) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error uploading image');
        }
        return res.status(200).send(image);
    });
});

// Set up database schema
const imageSchema = new mongoose.Schema({
    name: String,
});
const Image = mongoose.model('Image', imageSchema);

// Start the server
const port = 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
