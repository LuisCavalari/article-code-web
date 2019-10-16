import styled from 'styled-components';

export const Container = styled.div`
  .line{
      width:100%;
      height:1px;
      background-color:#999;
      margin-top:15px;
  }
`;
export const Title = styled.div`
    font-size:3rem;
    margin-top:5px;
    
    i{
        margin-right:15px;
    }
    
`
export const DataGrid = styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    margin-top:15px;
    grid-gap:15px;
`
export const Card = styled.div`
    background-color:#fff;
    padding:20px;
    border-radius:5px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    .card-content{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:flex-end;
        h2{
            font-weight:500;
        }
        span{
            font-size:3rem;
        }
    }
    i{
        font-size:5rem;
        color:${({color})=> color };
    }
`
