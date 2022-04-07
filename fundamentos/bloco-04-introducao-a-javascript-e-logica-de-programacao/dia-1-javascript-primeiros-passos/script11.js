let sBruto = 3000;
let inss = 0;
let ir = 0;
let irParcela = 0;

//calcula o valor do INNS
if (sBruto < 1212) {
    console.log('Salário inválido. Deve ser acima do salário mínimo de R$1212,00');
} else if (sBruto > 1212 && sBruto <= 1556.94) {
    inss = 0.08;
} else if (sBruto >= 1556.95 && sBruto <= 2594.92) {
    inss = 0.09;
} else if (sBruto >= 2594.93 && sBruto <= 5189.82) {
    inss = 0.11;
} else {
    inss = 0;
}

//salário deduzido INSS
let sInss;
if (sBruto > 5189.82) {
    sInss = sBruto - 570.88;
} else {
    sInss = sBruto - (sBruto * inss);
}

//calcula o valor do IR sobre o salário
if (sInss < 1903.99) {
    ir = 0;
} else if (sInss >= 1903.99 && sInss <= 2826.65) {
    ir = 0.075;
    irParcela = 142.8;
} else if (sInss >= 2826.66 && sInss <= 3751.05) {
    ir = 0.15;
    irParcela = 354.8;
} else if (sInss >= 3751.06 && sInss <= 4664.68) {
    ir = 0.225;
    irParcela = 636.13;
} else {
    ir = 0.275;
    irParcela = 869.36;
}

let deducaoIR = (sInss * ir) - irParcela;
let salarioLiquido = sInss - deducaoIR;
let salarioLiquidoArredondado = Number.parseFloat(salarioLiquido).toFixed(2);
//referência para arredondamento: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

//Resultados
console.log('Salário Bruto:', sBruto);
console.log('Salário depois do INSS:', sInss);
console.log('Imposto de renda:', deducaoIR);
console.log('Salário Líquido:', salarioLiquidoArredondado);