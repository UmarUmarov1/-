const Coffee = require("../models/news.model");

module.exports.newsController = {
    getNews: function(reg, res) {
       Coffee.find().then((coffee) => {
        res.json(coffee)
       })
           },
    getNewsById: function(reg, res) {
    Coffee.findById(reg.params.newsId).then(() => {
        res.json(coffee)
    })
},
    addNews: function(reg, res) {
    Coffee.create({
        Name: reg.body.Name,
        Price: reg.body.Price,
        isThereADrinkAvailable: 'Yes',
        doesTheDrinkContainCaffeine: reg.body.doesTheDrinkContainCaffeine,
        Volume: reg.body.Volume,
        descriptionOfTheDrink: reg.body.descriptionOfTheDrink
    }).then((a) => {
        res.json(a);
    })
    
    },
}
    