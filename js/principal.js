console.log("Fui carregado de um arquivo externo.");

var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdpeso = paciente.querySelector(".info-peso");
var peso = tdpeso.textContent;

var tdaltura = paciente.querySelector(".info-altura");
var altura = tdaltura.textContent;

var tdimc = paciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValida = true;

if(peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoValido = false;
    tdimc.textContent = "Peso Inválido!";
}
if(altura <= 0 || altura >= 3.00){
    console.log("Altura Inválida!");
    alturaValida = false;
    tdimc.textContent = "Altura Inválida";
}
if(pesoValido && alturaValida){
    var imc = peso/(altura * altura);
    tdimc.textContent = imc;
}



