 
var titulo = document.querySelector('.titulo');
titulo.textContent = 'Luana Nutricionista';


var paciente = document.querySelectorAll(".paciente");



for (var i = 0; i < paciente.length; i++) {


	// Recupera o aluno no indice i da lista alunos
	var paciente = paciente[i];
 
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);
console.log(imc);

var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;
}