import React from 'react';

import { InputComponent, Container } from './styles';

export default function Input({ label, ...rest }) {
  return <Container>
    <label htmlFor={label} >{label}</label>
    <InputComponent
      {...rest}
      name={label}
      
    />
  </Container>
}
