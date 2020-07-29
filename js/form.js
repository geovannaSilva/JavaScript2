
var botao = document.querySelector("#adicionar-paciente"); /*pegando o botao do html */

/* Criando o evento de click do botão adicionar */
botao.addEventListener("click", adicionar);

function adicionar(event) {
    event.preventDefault();

    var form = document.querySelector(".paciente-adicionado");

    var paciente = obterDadosdoPaciente(form);

    console.log(paciente);


    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();

};

function obterDadosdoPaciente(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr
}
/* Cria a tag TD e cria uma classe para cada tag */
function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}


