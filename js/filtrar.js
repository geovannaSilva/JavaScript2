var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function (){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){ /* So vai realizar a acao se dentro do campoFiltro(this) estiver algo digitado*/
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)){/* Se o nome testado(escrito) for diferente do que esta na var expressao entao o paciente sera ocultado */
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel")
            }
        }
    }else{ /* Se o campoFiltro(this) estiver fazio, a acao sera de apagar a classe invisivel de todos os pacientes */
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }


})