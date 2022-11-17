const mongoose = require('mongoose');

const coffeeSchema = mongoose.Schema({
    "Name": String,
    "Price": Number,
    "isThereADrinkAvailable": String,
    "doesTheDrinkContainCaffeine": String,
    "Volume": Number,
    "descriptionOfTheDrink": String
});

const Coffee = mongoose.model('Coffee', coffeeSchema);

module.exports = Coffee;