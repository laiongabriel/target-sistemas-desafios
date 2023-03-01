//3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// O menor valor de faturamento ocorrido em um dia do mês;
// O maior valor de faturamento ocorrido em um dia do mês;
// Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

const fs = require("fs");

const jsonData = JSON.parse(fs.readFileSync("dados.json"));

// Calcula o menor e o maior valor de faturamento ocorrido em um dia do mês
let menorValor = Infinity;
let maiorValor = -Infinity;

jsonData.forEach((item) => {
   if (item.valor < menorValor && item.valor !== 0) {
      menorValor = item.valor;
   }
   if (item.valor > maiorValor) {
      maiorValor = item.valor;
   }
});

console.log(`Menor valor de faturamento: ${menorValor}`);
console.log(`Maior valor de faturamento: ${maiorValor}`);

// Calcula a média mensal de faturamento, ignorando os dias sem faturamento
let soma = 0;
let quantidade = 0;

jsonData.forEach((item) => {
   if (item.valor !== 0) {
      soma += item.valor;
      quantidade++;
   }
});

const mediaMensal = soma / quantidade;

// Calcula o número de dias no mês em que o valor de faturamento diário foi superior à média mensal
let diasAcimaDaMedia = 0;

jsonData.forEach((item) => {
   if (item.valor > mediaMensal) {
      diasAcimaDaMedia++;
   }
});

console.log(
   `Número de dias em que o faturamento diário foi superior à média mensal: ${diasAcimaDaMedia}`
);
