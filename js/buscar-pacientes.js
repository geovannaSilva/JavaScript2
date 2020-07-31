var botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function () {
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function (){

        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200){ /* Se o status da página der 200, significa que esta tudo ok e a página pode rodar normalmente */

            erroAjax.classList.add("invisivel");

            var resposta = xhr.responseText;/*Esta passando para a var resposta apenas o texto dos dados*/

            var pacientes = JSON.parse(resposta);/*Esta transformando o texto da var resposta em um objeto com array e passando o varlor para a var pacientes*/

            pacientes.forEach(function(paciente) {/*Esta fazendo com que a funcao adicionaPacienteNaTabela seja passada por todos os dados do novo array*/
                adicionaPacienteNaTabela(paciente);
            })
        }else{/* Caso de algum problema no endereco ira apresentar uma mensagem de erro no console*/
            console.log(xhr.status);
            console.log(xhr.responseText);

            erroAjax.classList.remove("invisivel");
        }




    })

    xhr.send();
})