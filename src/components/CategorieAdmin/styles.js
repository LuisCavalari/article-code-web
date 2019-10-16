import styled from 'styled-components';

export const Row = styled.div`
    
`

export const Container = styled.div`
    table{
      width:100%;
      border-collapse:separate; 
      border-spacing: 0 ;
  }

  table thead{
      border:inherit;
  }

  th{
      padding:15px;
      
  }thead > tr > th{
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
 
  }
  
  thead{
      margin-bottom:30px;
  }
  td{
      text-align:center;
  }
  tbody > tr >td{
      margin-top:15px;
      padding:15px;
  }
  tbody >tr:nth-child(odd){
      background-color:#ddd;
  }
  tbody >tr:nth-child(even){
      background-color:#fff;
  }
`;
