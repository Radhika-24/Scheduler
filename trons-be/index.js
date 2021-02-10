const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const peopleRouter = require('./Routes/SlotRouter');

config = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
};

const connect = mongoose.connect("mongodb://localhost:27017/scheduler", config);

connect
.then((db) => {
    console.log("Connected correctly to server");
})
.catch((err) => {
    console.log(err);
});

const app = express();
const port = 3100;
app.use(cors());

app.all('*', (req, res, next) => next());
app.use('/schedule', peopleRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});