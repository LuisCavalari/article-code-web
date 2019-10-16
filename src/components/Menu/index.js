import React from 'react';
import { useSelector } from 'react-redux'
import { Container } from './styles';

export default function Menu() {
  const menu = useSelector(state => state.menu)
  return (
    <Container visibilityMenu={menu.visibilityMenuAside} >
   
      <h2>menu</h2>
    </Container>
  );
}
