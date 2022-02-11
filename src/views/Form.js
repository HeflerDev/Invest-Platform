import React, { useEffect, useState } from 'react'

import {
  Heading,
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

const Form = ({}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
    <Row>
    <Col>
      <Label text="Rendimento" icon={<AttentionIcon />}/>
      <Buttons icon={<CheckIcon/>} text="Bruto" />
      <Buttons icon={<CheckIcon/>} text="Líquido" />
      <InputField label={"Aporte Inicial"} />
      <InputField label={"Prazo (em meses)"} />
      <InputField label={"IPCA (ao ano)"} />
    </Col>
    <Col>
      <Label text="Tipo de Indexaçao" icon={<AttentionIcon />}/>
      <Buttons icon={<CheckIcon/>} text="PRÉ" />
      <Buttons icon={<CheckIcon/>} text="PÓS" />
      <Buttons icon={<CheckIcon/>} text="FIXADO" />
      <InputField label={"Aporte Mensal"} />
      <InputField label={"Prazo (em meses)"} />
      <InputField label={"IPCA (ao ano)"} />
    </Col>
    <Col>
      <Buttons text="Limpar Campos" />
      <Buttons text="Simular" />
    </Col>
    </Row>
    </form>
  )
}

export default Form
