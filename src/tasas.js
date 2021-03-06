const AA = [0.19, 0.21, 0.23, 0.25];
const BB = [0.35, 0.35, 0.35, 0.35];
const CC = [0.36, 0.39, 0.42, 0.45];

export function calculateTasa(months) {
  var tasaMensual;
  var tasaAnual;
  switch (months) {
    case 6:
      tasaAnual = BB[0];
      tasaMensual = BB[0] / 12;
      break;
    case 12:
      tasaAnual = BB[1];
      tasaMensual = BB[1] / 12;
      break;
    case 18:
      tasaAnual = BB[2];
      tasaMensual = BB[2] / 12;
      break;
    case 24:
      tasaAnual = BB[3];
      tasaMensual = BB[3] / 12;
      break;
    default:
      return 0;
  }
  return [parseFloat(tasaMensual.toFixed(4)), parseFloat(tasaAnual)];
}
