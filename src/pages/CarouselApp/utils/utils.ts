export const isBetween = (value: number, lower: number, upper: number) =>
  value > lower && value < upper;

export const normalizeScale = (scale: number) => {
  const minScale = 1;
  const maxScale = 1.35;
  return (scale - minScale) / (maxScale - minScale);
};
export const hexToRgb = (hex: string) => {
  let r = 0,
    g = 0,
    b = 0;
  if (hex.length == 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length == 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return [r, g, b];
};
export const getWeightedColor = (scales: number[]) => {
  const colors = ["#EBFFFC", "#EFF2FF", "#F6E1EE"].map(hexToRgb);
  let weightedSum = [0, 0, 0];

  scales.forEach((scale, i) => {
    const normalized = normalizeScale(scale);
    weightedSum[0] += colors[i][0] * normalized;
    weightedSum[1] += colors[i][1] * normalized;
    weightedSum[2] += colors[i][2] * normalized;
  });

  const sumOfScales = scales.reduce((acc, val) => acc + normalizeScale(val), 0);
  weightedSum = weightedSum.map((component) =>
    Math.round(component / sumOfScales)
  );

  return `rgb(${weightedSum[0]}, ${weightedSum[1]}, ${weightedSum[2]})`;
};
