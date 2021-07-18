export const metersToMiles = (meter) => {
  const miles = meter * 0.000621;
  return Number.parseFloat(miles).toFixed(2);
};
