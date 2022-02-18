/* eslint-disable */ 
export const formatMoneyValue = (str) => {
  return Intl.
      NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
      .format(str);
};

export const formatPercentValue = (str) => {
  return Intl.NumberFormat(String, {style: 'percent'}).format(str);
};
/* eslint-enable */
