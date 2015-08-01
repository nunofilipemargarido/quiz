var models = require('../models/models.js');

exports.load=function(req,res,next,QuizId){
	models.Quiz.findById(QuizId).then(
		function(quiz){
			
			if(quiz){
				req.quiz=quiz;
				next();
			} else { 
				next(new Error('No Existe QuizId='+QuizId));
			}
}
	);
};

exports.index=function(req,res){
	models.Quiz.findAll().then(function(quizes){
			res.render('quizes/index',{quizes:quizes});
	}).catch(function(error){next(error)});
	
};


exports.show=function(req,res){
	models.Quiz.findById(req.params.QuizId).then(function(quiz){
		res.render('quizes/show',{quiz:req.quiz})
	})
};

exports.answer=function(req,res){
	models.Quiz.findById(req.params.QuizId).then(function(quiz){
		if(req.query.respuesta===req.quiz.respuesta){
			res.render('quizes/answer',{quiz:req.quiz,respuesta:'correcta'})
		}else{
			res.render('quizes/answer',{quiz:req.quiz,respuesta:'incorrecta'})
		}
	})
	
};




/*exports.question=function(req, res, next) {
  res.render('quizes/question', { pergunta : 'Capital de Italia' });
}

exports.answer=function(req, res, next) {
	if(req.query.respuesta==="Roma"){
		res.render('quizes/answer', { respuesta: 'Correcto' });
	}else{
		res.render('quizes/answer', { respuesta: 'Incorrecto' });
	}
  
}*/


