import React, { useEffect, useState } from 'react'

import {
  Buttons,
  Label,
  InputField
} from './components'

import {
  Col,
  Row
} from 'react-bootstrap'

import {
  AttentionIcon,
  CheckIcon
} from '../assets/icons'

const defaultData = {
  contribution_revenue: '',
  deadline_revenue: '',
  ipca_revenue: '',
  contribution_index: '',
  deadline_index: '',
  ipca_index: '',
  revenue_type: 'brute',
  index_type: 'pre'
}

const Form = () => {
  const [formData, setFormData] = useState(defaultData)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const clearFields = () => {
    setFormData(defaultData)
  }

  const handleChange = ({ target }) => {
    const { name, value } = target
    setFormData({ ...formData, [name]: value })
  }

  const handleClick = (type, value) => {
    console.log(`${type}_type`)
    setFormData({ ...formData, [`${type}_type`]: value})
  }

  return (
    <form onSubmit={handleSubmit}>
    <Row>
    <Col xs={12}>
      <Label text="Rendimento" icon={<AttentionIcon />}/>
      <div className="btn-container">
        <Buttons onClick={() => handleClick('revenue', 'brute')} active={formData.revenue_type === 'brute'} icon={<CheckIcon/>} text="Bruto" />
        <Buttons onClick={() => handleClick('revenue', 'liquid')}active={formData.revenue_type === 'liquid'} icon={<CheckIcon/>} text="Líquido" />
      </div>
      <InputField name="contribution_revenue" onChange={handleChange} value={formData.contribution_revenue} label={'Aporte Inicial'} />
      <InputField name="deadline_revenue" onChange={handleChange} value={formData.deadline_revenue} label={'Prazo (em meses)'} />
      <InputField name="ipca_revenue" onChange={handleChange} value={formData.ipca_revenue}label={'IPCA (ao ano)'} />
    </Col>
    <Col xs={12}>
      <Label text="Tipo de Indexaçao" icon={<AttentionIcon />}/>
    <div className="btn-container">
      <Buttons className="small" onClick={() => handleClick('index', 'pre')} active={formData.index_type === 'pre'} icon={<CheckIcon/>} text="PRÉ" />
      <Buttons className="small" onClick={() => handleClick('index', 'pos')}active={formData.index_type === 'pos'}icon={<CheckIcon/>} text="PÓS" />
      <Buttons className="small" onClick={() => handleClick('index', 'fixed')} active={formData.index_type === 'fixed'} icon={<CheckIcon/>} text="FIXADO" />
    </div>
      <InputField onChange={handleChange} name="contribution_index" value={formData.contribution_index}label={'Aporte Mensal'} />
      <InputField onChange={handleChange} name="deadline_index" value={formData.deadline_index} label={'Prazo (em meses)'} />
      <InputField onChange={handleChange} name="ipca_index" value={formData.ipca_index} label={'IPCA (ao ano)'} />
    </Col>
    <Col>
      <Buttons className="btn-default" onClick={clearFields} text="Limpar Campos" />
      <Buttons className='btn-default submit' text="Simular" />
    </Col>
    </Row>
    </form>
  )
}

export default Form
