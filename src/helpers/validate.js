export const moneyRegex = /^R\$\s[0-9]+$/g;
export const percentRegex = /^[0-9]+%$/g;
export const numberRegex = /^[0-9]+$/g;

export const validateForm = (data) => {
  const errors = [];


  if (data.contribution_revenue.length <= 3) {
    errors.push(['contribution_revenue', 'Campo obrigatório.']);
  } else if (!moneyRegex.test(data.contribution_revenue)) errors.push(['contribution_revenue', 'Apenas números são permitidos.']);

  if (data.deadline_revenue.length < 1) {
    errors.push(['deadline_revenue', 'Campo obrigatório.']);
  } else if (!numberRegex.test(data.deadline_revenue)) errors.push(['deadline_revenue', 'Apenas números são permitidos.']);

  if (data.ipca_revenue.length < 1) {
    errors.push(['ipca_revenue', 'Campo Obrigatório']);
  } else if (!percentRegex.test(data.ipca_revenue)) errors.push(['ipca_revenue', 'Apenas números são permitidos.']);

  if (data.contribution_index.length <= 3) {
    errors.push(['contribution_index', 'Campo Obrigatório']);
  } else if (!moneyRegex.test(data.contribution_index)) errors.push(['contribution_index', 'Apenas Números são permitidos.']);

  if (data.rentability_index.length < 1) {
    errors.push(['rentability_index', 'Campo Obrigatório']);
  } else if (!percentRegex.test(data.rentability_index)) errors.push(['rentability_index', 'Apenas Números são permitidos.']);

  if (data.cdi_index.length < 1) {
    errors.push(['cdi_index', 'Campo Obrigatório']);
  } else if (!percentRegex.test(data.cdi_index)) errors.push(['cdi_index', 'Apenas números são permitidos.']);

  return errors;
};
