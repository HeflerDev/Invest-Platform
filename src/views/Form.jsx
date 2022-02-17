import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {storeData} from '../store/apiDataSlice';
import {validateForm} from '../helpers/validate';

import {
  Col,
  Row,
} from 'react-bootstrap';
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
  revenue_type: 'bruto',
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
  const [formData, setFormData] = useState({...defaultData});
  const [lastKey, setLastKey] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    document.querySelectorAll('input').forEach((item) => {
      item.addEventListener('keydown', (e) => setLastKey(e.key));
    });

    fetch('http://localhost:3000/indicadores')
        .then((res) => res.json())
        .then((data) => {
          const obj = {...formData};
          data.forEach((item) => {
            if (item.nome === 'cdi') {
              obj.cdi_index =`${item.valor} %`.replace(/\./g, ',');
            } else if (item.nome === 'ipca') {
              obj.ipca_revenue = `${item.valor} %`.replace(/\./g, ',');
            } else {
              new Error('Erro na chamada: DB não compatível.');
            }
          });
          setFormData(obj);
        });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {...defaultData.errors};
    const validation = validateForm(formData);
    if (validation.length > 0) {
      validation.forEach((item) => {
        obj[item[0]] = item[1];
      });
      setFormData({...formData, errors: obj});
      return false;
    }
    setFormData({...formData, errors: obj});
    fetch(`http://localhost:3000/simulacoes?tipoIndexacao=${formData.index_type}&tipoRendimento=${formData.revenue_type}`, {
      method: 'GET',
      mode: 'cors',
    })
        .then((res) => res.json())
        .then((data) => dispatch( storeData(data[0]) ));
  };

  const clearFields = () => {
    setFormData({
      ...defaultData,
      cdi_index: formData.cdi_index,
      ipca_revenue: formData.ipca_revenue,
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (/\d/.test(lastKey) ||
        lastKey === 'Backspace' ||
        lastKey === ',' ||
      lastKey === 'Space') {
      if (name === 'contribution_revenue' ||
        name === 'contribution_index') {
        const input = value.match(/\d/g);
        if (input.length > 1) {
          if (lastKey === 'Backspace') {
            input.splice(-2, 2);
          } else {
            input.splice(-3, 2);
          }
        }
        setFormData({...formData, [name]: formatMoneyValue(input.join(''))});
      }

      if (name === 'deadline_revenue') {
        const input = value.match(/^\d{0,3}/).join('');
        setFormData({...formData, [name]: input});
      }

      if (name === 'rentability_index') {
        if (lastKey === 'Backspace' && value.length === 0) {
          return setFormData({...formData, [name]: ''});
        }

        if (/%.$/g.test(value)) {
          const input = value.slice(0, -1);
          return setFormData({...formData, [name]: input});
        }

        if (/^[0-9]*,?[0-9]{0,3}\s?%?$/g.test(value)) {
          setFormData({...formData, [name]: value});
        }
      }
    }
  };

  const handleFocus = ({target}) => {
    const {name, value} = target;
    if (/%$/g.test(value)) {
      setFormData({
        ...formData,
        [name]: value.slice(0, -2),
      });
    }
  };

  const handleBlur = ({target}) => {
    const {name, value} = target;

    let input;
    if (value.length === 0) return false;
    if (/%$/g.test(value)) {
      input = value.slice(0, -2);
    } else {
      input = value;
    }
    if (/,$/g.test(input)) input = input.slice(0, -1);
    if (/^0+/g.test(input)) input = input.replace(/^0+(?!,|$)/, '');

    setFormData({...formData, [name]: input + ' %'});
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
              onClick={() => handleClick('revenue', 'bruto')}
              active={formData.revenue_type === 'bruto'}
              icon={<CheckIcon />}
              text="Bruto"
            />
            <Buttons
              onClick={() => handleClick('revenue', 'liquido')}
              active={formData.revenue_type === 'liquido'}
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
              onClick={() => handleClick('index', 'ipca')}
              active={formData.index_type === 'ipca'}
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
            label="Rentabilidade"
            error={formData.errors.rentability_index}
            tabIndex={0}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <InputField
            onChange={handleChange}
            name="cdi_index"
            value={formData.cdi_index}
            label="CDI (ao ano)"
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
