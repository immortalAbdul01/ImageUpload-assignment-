const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

app.listen(process.env.PORT, () => {
    console.log(`server has been  started on ${process.env.PORT}`);
})
mongoose.connect(process.env.LINK, () => {
    console.log('connected with mongoose');
})