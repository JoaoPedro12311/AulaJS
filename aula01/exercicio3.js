var valor = prompt("Digite um valor: ");

var taxa = prompt("Digite a taxa de juros (em %): ");

var tempo = prompt("Digite o tempo de atraso (em dias): ");

var parcela = Number(valor) + (Number(valor) * (Number(taxa) / 100)) + (Number(tempo) * 0.5);

document.write("O valor da parcela com juros é: " + parcela.toFixed(2));