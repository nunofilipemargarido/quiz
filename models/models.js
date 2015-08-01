var path = require('path');

//cargar modelos orm
var Sequelize=require('sequelize');

var url=process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DB_name=(url[6]||null);
var user   =(url[2]||null);
var pwd    =(url[3]||null);
var protocol=(url[1]||null);
var dialect=(url[1]||null);
var port =(url[5]||null);
var host =(url[4]||null);
var storage=process.env.DATABASE_STORAGE

//Usar var bbdd ssqlite
var sequelize=new Sequelize(DB_name,user,pwd,{
	dialect:protocol,
	protocol:protocol,
	port:port,
	host:host,
	storage:storage,
	omitNull:true
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
				pergunta:'Capital de Espanha',
				respuesta:'M',
			});
					
			Quiz.create({
				pergunta:'Capital de Portugal',
				respuesta:'Lisboa',
			})
			.then(function(){console.log('Base De Datos inicializada')});
		};
	});
});