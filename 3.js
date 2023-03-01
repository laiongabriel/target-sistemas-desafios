//3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// O menor valor de faturamento ocorrido em um dia do mês;
// O maior valor de faturamento ocorrido em um dia do mês;
// Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

const fs = require("fs");

const jsonData = JSON.parse(fs.readFileSync("dados.json"));

const listaDeValores = [];
jsonData.forEach((item) => {
   if (item.valor !== 0) listaDeValores.push(item.valor);
});

const valorMenor = Math.min(...listaDeValores);
const valorMaior = Math.max(...listaDeValores);

console.log(`Menor valor de faturamento: ${valorMenor}`);
console.log(`Maior valor de faturamento: ${valorMaior}`);

const somaTotal = listaDeValores.reduce(
   (acc, valorAtual) => acc + valorAtual,
   0
);
const mediaMensal = somaTotal / listaDeValores.length;

let diasAcimaDaMedia = 0;
listaDeValores.forEach((item) => {
   if (item > mediaMensal) {
      diasAcimaDaMedia++;
   }
});

console.log(`Dias acima da média: ${diasAcimaDaMedia}`);
