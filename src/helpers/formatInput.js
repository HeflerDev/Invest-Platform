export const formatMoneyValue = (str) => {
  return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(str)
}
