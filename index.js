const express = require('express');
const mongoose = require('mongoose')

const app = express();

app.use(express.json());
app. use (require('./routes'));

mongoose.connect('mongodb+srv://Umar:5265-umar@cluster0.jdabg83.mongodb.net/btc?retryWrites=true&w=majority',
() => {
      console.log('connected');
      app.listen(3000, function () {
        console.log('server has been started');
    });
}
)

