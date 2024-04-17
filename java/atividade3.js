function ganhoGasto() {
    var ganhoBrutoMensal
    var gastoBrutoMensal
    var ganhoBrutoTotal = 0
    var gastoBrutoTotal = 0
    var liquido

    for (i = 1; i < 13; i++) {
       
        ganhoBrutoMensal = parseFloat(prompt("Digite o ganho do mês: " + i));

        if (!isNaN(ganhoBrutoMensal)) {
            ganhoBrutoTotal += ganhoBrutoMensal;
        } else {
            alert("Digite um valor válido por favor:");
        }

        gastoBrutoMensal = parseFloat(prompt("Digite o gasto do mês: " + i));

        if (!isNaN(gastoBrutoMensal)) {
            gastoBrutoTotal += gastoBrutoMensal;
        } else {
            alert("Digite um valor válido por favor:");
        }
    }
    liquido = ganhoBrutoTotal - gastoBrutoTotal;

        if (0 < liquido){
            alert("Você teve um lucro de : " + liquido);
        }
        else if (0 > liquido)
            alert("Você teve um prejuízo de : " + liquido);
        else {
            alert("Você não teve prejuízo nem lucro.");
        }
}