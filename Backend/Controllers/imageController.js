const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const conn = mongoose.createConnection('mongodb+srv://book:book@book.d7jzhrg.mongodb.net/?retryWrites=true&w=majority');

let gfs;

conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
});

async function getAllImages(req, res) {
    try {
        const files = await gfs.files.find().toArray();
        const images = files.filter(file => file.contentType.startsWith('image/'));
        res.json(images);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
}

module.exports = { getAllImages };
