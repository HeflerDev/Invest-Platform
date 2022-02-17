export const moneyRegex = /^R\$\s[0-9]+$/g;
export const percentRegex = /^[0-9]+,?[0-9]{0,3}\s%$/g
export const numberRegex = /^[0-9]+$/g;

export const validateForm = (data) => {
  const errors = [];

  if (data.contribution_revenue.length <= 3) {
    errors.push(['contribution_revenue', 'Campo obrigatório.']);
  }
  if (/^R\$\s0,00/g.test(data.contribution_revenue)) errors.push(['contribution_revenue', 'Valor não pode ser 0.'])

  if (data.deadline_revenue.length < 1) {
    errors.push(['deadline_revenue', 'Campo obrigatório.']);
  } else {
    if (/^(0|\D)/.test(data.deadline_revenue)) errors.push(['deadline_revenue', 'Deve ser número maior que 0.'])
  }

  if (data.ipca_revenue.length < 1) {
    errors.push(['ipca_revenue', 'Campo Obrigatório']);
  }

  if (data.contribution_index.length <= 3) {
    errors.push(['contribution_index', 'Campo Obrigatório']);
  } 
  if (/^R\$\s0,00/g.test(data.contribution_index)) errors.push(['contribution_index', 'Valor não pode ser 0.'])

  if (data.rentability_index.length < 1) {
    errors.push(['rentability_index', 'Campo Obrigatório']);
  } else {
    if (/^%/g.test(data.rentability_index)) errors.push(['rentability_index', 'O valor precisa ser numérico acima de 0.']);
  }

  if (data.cdi_index.length < 1) {
    errors.push(['cdi_index', 'Campo Obrigatório']);
  }

  return errors;
};
