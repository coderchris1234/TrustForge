import styled from "styled-components"
export const Funding_container = styled.div`
height: 7rem;
width: 100%;
display: flex;
gap: 2rem;
.funding_wrapper{
    height: 100%;
    width: 18rem;
    padding: 0.8rem;
    border-radius: 0.7rem;
    border: 1px solid gray;
    border-radius: 0.7rem; 
    background-color: #fff;  

    .total_wrapper{
        display: flex;
        height: 40%;
        width: 100%;
        gap: 4rem;
        font-size: 14px;
    }
    .total{
        height: 100%;
        width: 60%;
       
    }
    .sign{
        height: 60%;
        width:11%;
        background-color: #CEE3FF;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #0046FF;
    }
    .amount{
        height: 70%;
        width: 100%;
        display: flex;
        align-items:flex-end;
        font-weight: 600;
    }
}
`