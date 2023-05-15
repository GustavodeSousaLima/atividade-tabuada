function gerar(){
    var valor = Number(document.getElementById('number').value)
    var botao = document.getElementById('botao')
    var i = 1
    var resultado = ''
    var tabuada = document.getElementById('tabuada')
    tabuada.style.backgroundColor = 'green'

    while(i<=20) {
        resultado += "<p id=resultados>" + valor + " x " + i + " = " + valor*i + "</p>";
        i++
    }
 tabuada.innerHTML = resultado
}