const AA = [0.19, 0.21, 0.23, 0.25];
const BB = [0.27, 0.3, 0.33, 0.36];
const CC = [0.36, 0.39, 0.42, 0.45];

export function calculateTasa(months, creditHistory) {
  var tasa;
  var tasaAnual;
  switch (months) {
    case 6:
      if (creditHistory === 'AA') {
        tasaAnual = AA[0];
        tasa = tasaAnual / months;
      } else if (creditHistory == 'BB') {
        tasaAnual = BB[0];
        tasa = BB[0] / months;
      } else {
        tasaAnual = CC[0];
        tasa = CC[0] / months;
      }
      break;
    case 12:
      if (creditHistory === 'AA') {
        tasaAnual = AA[1];
        tasa = AA[1] / months;
      } else if (creditHistory == 'BB') {
        tasaAnual = BB[1];
        tasa = BB[1] / months;
      } else {
        tasaAnual = CC[1];
        tasa = CC[1] / months;
      }
      break;
    case 18:
      if (creditHistory === 'AA') {
        tasaAnual = AA[2];
        tasa = AA[2] / months;
      } else if (creditHistory == 'BB') {
        tasaAnual = BB[2];
        tasa = BB[2] / months;
      } else {
        tasaAnual = CC[2];
        tasa = CC[2] / months;
      }
      break;
    case 24:
      if (creditHistory === 'AA') {
        tasaAnual = AA[3];
        tasa = AA[3] / months;
      } else if (creditHistory == 'BB') {
        tasaAnual = BB[3];
        tasa = BB[3] / months;
      } else {
        tasaAnual = CC[3];
        tasa = CC[3] / months;
      }
      break;
    default:
      return 0;
  }
  return [parseFloat(tasa.toFixed(4)), parseFloat(tasaAnual)];
}
