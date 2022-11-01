const units: {[key:string]: number} = {
  km: 1000,
  hm: 100,
  dam: 10,
  m: 1,
  dm: 0.1,
  cm: 0.01,
  mm: 0.001,
}

const convert = (value: number, unitConverted: string, finalUnit: string): string => {
  if(units[unitConverted] && units[finalUnit]) {
    const conversion = units[finalUnit] / units[unitConverted];
    const result = value * conversion;
    return `${result}${finalUnit}`
  }

  return "invalid unit";
}

console.log(convert(1, 'cm', 'cm'));
