const num = 4;
let a = 0;
let b = 1;
let c = 0;

while (c < num) {
   c = a + b;
   a = b;
   b = c;
}

console.log(
   c === num ? `${num} existe na sequência.` : `${num} não existe na sequêcia.`
);
