const express = require ('express')
const mongoose = require ('mongoose')
const userModel = require('./models/Users')

const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://127.0.0.1:27017/websystemdb/")

app.post("/officialCreate", (req, res) => {
    userModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.listen(3002, () => {
    console.log('Server is running')
})