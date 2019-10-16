import styled from 'styled-components';

export const Container = styled.div`
  background-color:#fff;
  max-width:350px;
  width:100%;
  padding:15px 20px;
  border-radius:4px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  form{
    width:100%;
  }
  h2{
      margin-bottom:5px;
  }
  input,label{
      margin-top:10px;
  }
  button{
    width:100%;
    margin-top:15px;
  }
`;

export const Row = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  a{
    text-decoration:none;
  }
  a:hover{
    text-decoration:underline;
  }
`