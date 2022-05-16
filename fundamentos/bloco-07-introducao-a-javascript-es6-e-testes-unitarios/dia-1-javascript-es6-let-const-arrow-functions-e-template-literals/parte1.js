// Modifique a estrutura da função para que ela seja uma arrow function.
// Modifique as concatenações para template literals.
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if).';
    ifScope = `${ifScope} Ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(false);

//faça uma função que retorne o array oddsAndEvens em ordem crescente.
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const ordenator = (num1, num2) => num1 > num2 ? 1 : -1;
const orderedArray = oddsAndEvens.sort(ordenator)
console.log(orderedArray);

// Referências:
// https://www.w3schools.com/js/js_array_sort.asp