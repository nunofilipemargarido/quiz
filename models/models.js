var path = require('path');

//cargar modelos orm
var Sequelize=require('sequelize');

//Usar var bbdd ssqlite
var sequelize=new Sequelize(null,null,null,{
	dialect:"sqlite",storage:"quiz.sqlite"
}) ;

//importar la defenicion de la tabela quiz en quiz.js
var Quiz =sequelize.import(path.join(__dirname,'quiz'));
exports.Quiz=Quiz;//exportar defenicion

sequelize.sync().then(function(){
	Quiz.count().then(function(count){
		if(count===0){
			Quiz.create({
				pergunta:'Capital de Italia',
				respuesta:'Roma',
			});
			
			Quiz.create({
				pergunta:'Capital de França',
				respuesta:'Paris',
			});
					
			Quiz.create({
				pergunta:'Capital de Portugal',
				respuesta:'Lisboa',
			})
			.then(function(){console.log('Base De Datos inicializada')});
		};
	});
});