const massUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

const convertMass = (value: number, unitConverted: string, finalUnit: string): string => {
  const conversion = 10 ** massUnits.indexOf(finalUnit) - massUnits.indexOf(unitConverted);
  const result = value * conversion;
  return `${value}${unitConverted} = ${result}${finalUnit}`
}

console.log(convertMass(2, 'kg', 'g'));

export = { convertMass }
