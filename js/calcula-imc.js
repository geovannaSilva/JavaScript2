console.log("Fui carregado de um arquivo externo.");

var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");



for (var i=0; i < pacientes.length; i++){
    console.log(pacientes[i]);


    var paciente = pacientes[i];


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
        paciente.style.backgroundColor = "red";
        paciente.classList.add("paciente-invalido");
    }
    if(altura <= 0 || altura >= 3.00){
        console.log("Altura Inválida!");
        alturaValida = false;
        tdimc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    }
    if(pesoValido && alturaValida){
        var imc = calculaImc(peso, altura);
        tdimc.textContent = imc;
    }

}

function calculaImc(peso,altura){
    var imc = 0;

    var imc = peso/(altura * altura);

    return imc.toFixed(2);
}








