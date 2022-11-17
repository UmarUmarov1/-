const {Router} = require('express');
const { newsController } = require('../controllers/news.controller');

const router = Router();


router.get('/', newsController.getNews);

router.get('/:newsId/cats/:catsId', newsController.getNewsById);

router.post('/', newsController.addNews)

module.exports = router;