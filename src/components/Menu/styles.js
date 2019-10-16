import styled from 'styled-components';

export const Container = styled.aside`
  grid-area:menu;

  background-color:#444;
  z-index:1000;
  display:${ props => props.visibilityMenu ? 'block' : 'none' };
  transition: all 300ms linear;
  @media (max-width:880px){
    &{
      display:none;
    }
  }
`;
