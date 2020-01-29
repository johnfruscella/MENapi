require('dotenv/config');

const express = require('express');
const app = express();
const mongoose = require('mongoose');


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(process.env.DB_CONNECTION, options);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers', subscribersRouter);


app.listen(3000, () => console.log(`Server listening on port 3000`));