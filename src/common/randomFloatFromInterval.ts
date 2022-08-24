const randomFloatFromInterval = (min: number, max: number, fractionDigits: number) => {
  const fractionMultiplier = Math.pow(10, fractionDigits);
  return Math.round((Math.random() * (max - min) + min) * fractionMultiplier) / fractionMultiplier;
};

export default randomFloatFromInterval;
