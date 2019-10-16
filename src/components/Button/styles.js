import styled from 'styled-components';

export const ButtonComponent = styled.button`
  border:none;
  outline:none;
  background-color:${props => props.color};
  color:${props => props.fill};
  padding:9px 18px;
  margin-bottom:15px;
  font-weight:bold;
  border-radius:2px;
  margin-right:5px;
  cursor:pointer;
  &:hover{
      background-color: rgba(0,0,0,0.5)
  }
`;
