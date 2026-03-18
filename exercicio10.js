var valorHora = prompt("Digite o valor da hora trabalhada: ");

var horasTrabalhadas = prompt("Digite o número de horas trabalhadas no dia: ");

var salarioDiario = Number(valorHora) * Number(horasTrabalhadas) * 30;

document.write("O salário mensal é: R$ " + salarioDiario.toFixed(2));
