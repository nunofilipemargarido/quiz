exports.question=function(req, res, next) {
  res.render('quizes/question', { pergunta : 'Capital de Italia' });
}

exports.answer=function(req, res, next) {
	if(req.query.respuesta==="Roma"){
		res.render('quizes/answer', { respuesta: 'Correcto' });
	}else{
		res.render('quizes/answer', { respuesta: 'Incorrecto' });
	}
  
}


