import styled from 'styled-components';

export const Container = styled.header`
  grid-area:header;
  color:#fff;
  background: linear-gradient(to right,#1e469a,#49a7c1);
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding-left:5px;
  padding-right:20px;
  a{
    color:#fff;
    text-decoration:none;
    cursor:pointer;
  }
  .arrow{
    display:flex;
    justify-content:center;
    align-items:center;
    width:60px;
    height:60px;
    cursor:pointer;
    i{
      
    }
  }.arrow:hover{
    background-color:rgba(0,0,0,0.2);
  }
`;

export  const UserMenu = styled.div`
  display:flex;
  align-items:center;
  position: relative;
  height:100%;
  padding:0 5px;
  &:hover{
    background-color:rgba(0,0,0,0.2);
  }
  img{
    width:50px;
    border-radius:4px;
    margin:0 10px;
  }
  &:hover .dropdown{
    visibility:visible;
    opacity:1;
  }
  .dropdown{
    position:absolute;
    right:0px;
    min-width:180px;
    top:60px;
    background-color:#fff;
    padding:10px;
    display:flex;
    visibility:hidden;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    transition:visibility 0s,opacity 0.5s linear;
  }
  .dropdown a{
      padding:10px;
      text-decoration:none;
      color:#444;
      font-weight:600;
      font-size:1rem;
      width:100%;
     
  }.dropdown a:hover{
    background-color:rgba(0,0,0,0.1)
  }
  .dropdown a i{
    margin-right:5px;
  }
`