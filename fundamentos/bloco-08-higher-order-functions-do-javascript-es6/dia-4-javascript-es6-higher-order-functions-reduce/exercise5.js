// 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra 'a' maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(arr) {
  return arr.reduce((countAs, current) => {
    let countInWord = 0;
    for (letter of current) {
      if (letter === 'a' || letter === 'A') {
        countInWord += 1
      }
    }
    return countAs + countInWord;
  }, 0);
}

console.log(containsA(names));
