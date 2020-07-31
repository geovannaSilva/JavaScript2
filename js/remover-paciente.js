var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    var alvoEvento = event.target; //O alvoEvento é onde o usuario da o dblclick especificamente
    var paiDoAlvo = alvoEvento.parentNode; //* Esta passando o alvoEvento como filho da var paiAlvo para quando apagar ser possivel apagar todo o tr *//
    paiDoAlvo.classList.add("fadeOut"); // * O pai o alvo, ou seja, a tr esta recebendo uma classe que no css faz com que ela seja apagada*//

    setTimeout(function (){ //* O tempo que o navegador deve levar para apagar o tr */
        paiDoAlvo.remove();
    }, 500);
});