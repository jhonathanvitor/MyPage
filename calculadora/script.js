function insert(parametro) {
  var numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + parametro;
}

function apagarTudo() {
  document.getElementById('resultado').innerHTML = "";
}

function apagar() {
  var apagando = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = apagando.substring(0, apagando.length - 1);
}

function igual() {
  var calcular = document.getElementById('resultado').innerHTML;
  if (calcular) {
    document.getElementById('resultado').innerHTML = eval(calcular);
  } else {
    document.getElementById('resultado').innerHTML = "ERRO!"
  }
}