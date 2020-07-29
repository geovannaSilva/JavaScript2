
var botao = document.querySelector("#adicionar-paciente"); /*pegando o botao do html */

botao.addEventListener("click", adicionar); /* Criando o evento de click */

/* Inicio da Função do evento de click */

function adicionar(event) {
    event.preventDefault();

    var paciente = document.querySelector(".paciente-adicionado");/* Pegando o form com os inputs */

    var nome = paciente.nome.value; /* Passando o valor dos inputs para uma variável */
    var peso = paciente.peso.value; /* Passando o valor dos inputs para uma variável */
    var altura = paciente.altura.value; /* Passando o valor dos inputs para uma variável */
    var gordura = paciente.gordura.value; /* Passando o valor dos inputs para uma variável */

    var pacienteTr = document.createElement("tr"); /* Criando uma TR atraves do JS */

    var nomeTd = document.createElement("td"); /* Criando um TD atraves do JS */
    var pesoTd = document.createElement("td"); /* Criando um TD atraves do JS */
    var alturaTd = document.createElement("td"); /* Criando um TD atraves do JS */
    var gorduraTd = document.createElement("td"); /* Criando um TD atraves do JS */
    var imcTd = document.createElement("td"); /* Criando um TD atraves do JS */

    nomeTd.textContent = nome; /* Passando apenas os valores das TD */
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso, altura);

    pacienteTr.appendChild(nomeTd);/* passando as td como filhas da tr */
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes"); /* Pegando o corpo da tabela */

    tabela.appendChild(pacienteTr);

}