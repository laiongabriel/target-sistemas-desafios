// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

const text = "JavaScript é legal";

function inverterString(text) {
   arrayText = [];
   for (let i = text.length - 1; i >= 0; i--) {
      arrayText.push(text[i]);
   }
   const invertedText = arrayText.toString().replaceAll(",", "");
   console.log(invertedText);
}

inverterString(text);
