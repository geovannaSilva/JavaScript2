

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

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if(!pesoValido) {
        console.log("Peso inválido!");
        pesoValido = false;
        tdimc.textContent = "Peso Inválido!";
        paciente.style.backgroundColor = "red";
        paciente.classList.add("paciente-invalido");
    }
    if(!alturaValida){
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

function validaPeso(peso){
    if (peso > 0 && peso < 1000 ){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if (altura > 0 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0;

    var imc = peso/(altura * altura);

    return imc.toFixed(2);
}








