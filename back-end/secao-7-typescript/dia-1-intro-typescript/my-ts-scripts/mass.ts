const convertMass = (value: number, unitConverted: string, finalUnit: string): string => {
  const massUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
  const conversion = 10 ** (massUnits.indexOf(finalUnit) - massUnits.indexOf(unitConverted));
  const result = value * conversion;
  return `${value}${unitConverted} = ${result}${finalUnit}`
}

export { convertMass }
