const a = 120;
const b = 50;
const c = 99;
const texto = ' é o maior número.'

if (a > b && a > c) {
    console.log(a + texto);
} else if (b > a && b > c) {
    console.log(b + texto);
} else if (c > a && c > b) {
    console.log(c + texto);
} else {
    console.log('Não há um único número maior');
}