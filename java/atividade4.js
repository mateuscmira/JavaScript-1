function ordenarDecrescente() {
    var valores = [];

    for (var i = 0; i < 4; i++) {
        var valor = parseInt(prompt("Digite o " + (i + 1) + "º valor inteiro:"));
        valores.push(valor);
    }


    valores.sort(function (a, b) {
        return b - a;
    });

    alert("Valores em ordem decrescente: " + valores.join(", "));
}