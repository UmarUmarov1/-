module.exports.categoriesController = {
    getCategories: function(reg, res) {
        res.json('all cats')
    },
    addCategories: function(reg, res) {
        Category.create({
        name: reg.body.name
        }).then((cat) => {
        res.json(cat);
        })
    },
};