import styled from 'styled-components';

export const Container = styled.div`
  height:100vh;
  display:grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas: "header header"
  "menu content";
 
 &.menuHidden{
  grid-template-columns: 1fr;
  grid-template-areas: "header header"
  "content content";
 }
  main{
    grid-area:content;
    padding:15px;
  }
  @media (max-width:880px){
    &{
      grid-template-columns: 1fr;
      grid-template-areas:"header"
      "content";
    }
  }
  
`;
