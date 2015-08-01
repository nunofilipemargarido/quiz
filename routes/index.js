var express = require('express');
var router = express.Router();
var quizController=require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

router.param('QuizId',quizController.load);//autoload :quizId

router.get('/quizes',quizController.index );
router.get('/quizes/:QuizId(\\d+)',quizController.show );
router.get('/quizes/:QuizId(\\d+)/answer', quizController.answer);

router.get('/author', function(req, res, next) {
	  res.render('author', { author : 'Nuno Gonçalves' });
});

module.exports = router;
