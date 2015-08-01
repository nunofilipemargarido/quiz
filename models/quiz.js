module.exports=function (sequelize,DataTypes){
	return sequelize.define('Quiz',{
		pergunta: DataTypes.STRING,
		respuesta: DataTypes.STRING,
	});
	
	
}