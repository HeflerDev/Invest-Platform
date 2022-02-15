import React, {useEffect, useState} from 'react';
import {
  Col,
  Row,
} from 'react-bootstrap';
import {validateForm,
  moneyRegex,
  percentRegex,
  numberRegex,
} from '../helpers/validate';
import {formatMoneyValue} from '../helpers/formatInput';


import {
  Buttons,
  Label,
  InputField,
} from './components';
import {
  AttentionIcon,
  CheckIcon,
} from '../assets/icons';

const defaultData = {
  contribution_revenue: '',
  deadline_revenue: '',
  ipca_revenue: '',
  contribution_index: '',
  rentability_index: '',
  cdi_index: '',
  revenue_type: 'brute',
  index_type: 'pre',
  errors: {
    contribution_revenue: null,
    deadline_revenue: null,
    ipca_revenue: null,
    contribution_index: null,
    rentability_index: null,
    cdi_index: null,
  },
};

const Form = () => {
  const [formData, setFormData] = useState(defaultData);
  const [lastKey, setLastKey] = useState('')

  useEffect(() => {
    document.querySelectorAll('input').forEach(item => {
      item.addEventListener('input', (e) => setLastKey(e.key))
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validateForm(formData);
    if (validation.length > 0) {
      const obj = {...defaultData.errors};
      validation.forEach((item) => {
        obj[item[0]] = item[1];
      });
      console.log(formData.errors);
      setFormData({...formData, errors: obj});
    }
  };

  const clearFields = () => {
    setFormData(defaultData);
  };

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    const key = e.key
    console.log(e, e.key, e.keyCode)
    if (name === 'contribution_revenue' ||
      name === 'index_revenue') {
      const input = value.match(/\d/g)
      if (input.length > 1) {
        input.splice(-3, 2)
      }
      console.log(input)
      setFormData({...formData, [name]: formatMoneyValue(input.join(''))})
    }
  };

  const handleClick = (type, value) => {
    setFormData({...formData, [`${type}_type`]: value});
  };

  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Col xs={12}>
          <Label text="Rendimento" icon={<AttentionIcon />} />
          <div className="btn-container">
            <Buttons
              onClick={() => handleClick('revenue', 'brute')}
              active={formData.revenue_type === 'brute'}
              icon={<CheckIcon />}
              text="Bruto"
            />
            <Buttons
              onClick={() => handleClick('revenue', 'liquid')}
              active={formData.revenue_type === 'liquid'}
              icon={<CheckIcon />}
              text="Líquido"
            />
          </div>
          <InputField
            name="contribution_revenue"
            onChange={handleChange}
            value={formData.contribution_revenue}
            label="Aporte Inicial"
            error={formData.errors.contribution_revenue}
          />
          <InputField
            name="deadline_revenue"
            onChange={handleChange}
            value={formData.deadline_revenue}
            label="Prazo (em meses)"
            error={formData.errors.deadline_revenue}
          />
          <InputField
            name="ipca_revenue"
            onChange={handleChange}
            value={formData.ipca_revenue}
            label="IPCA (ao ano)"
            error={formData.errors.ipca_revenue}
          />
        </Col>
        <Col xs={12}>
          <Label text="Tipo de Indexaçao" icon={<AttentionIcon />} />
          <div className="btn-container">
            <Buttons
              className="small"
              onClick={() => handleClick('index', 'pre')}
              active={formData.index_type === 'pre'}
              icon={<CheckIcon />}
              text="PRÉ"
            />
            <Buttons
              className="small"
              onClick={() => handleClick('index', 'pos')}
              active={formData.index_type === 'pos'}
              icon={<CheckIcon />}
              text="PÓS"
            />
            <Buttons
              className="small"
              onClick={() => handleClick('index', 'fixed')}
              active={formData.index_type === 'fixed'}
              icon={<CheckIcon />}
              text="FIXADO"
            />
          </div>
          <InputField
            onChange={handleChange}
            name="contribution_index"
            value={formData.contribution_index}
            label="Aporte Mensal"
            error={formData.errors.contribution_index}
          />
          <InputField
            onChange={handleChange}
            name="rentability_index"
            value={formData.rentability_index}
            label="Prazo (em meses)"
            error={formData.errors.rentability_index}
          />
          <InputField
            onChange={handleChange}
            name="cdi_index"
            value={formData.cdi_index}
            label="IPCA (ao ano)"
            error={formData.errors.cdi_index}
          />
        </Col>
        <Col>
          <Buttons
            className="btn-default"
            onClick={clearFields}
            text="Limpar Campos" />
          <input
            className={validateForm(formData).length === 0 ?
              'btn-default submit' :
              'disabled btn-default submit'
            }
            type="submit"
            value="Simular"
            onClick={handleSubmit}
          />
        </Col>
      </Row>
    </form>
  );
};

export default Form;
