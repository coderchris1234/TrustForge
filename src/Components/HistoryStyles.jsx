import styled from "styled-components"
export const History_container = styled.div`
height: 12rem;
width: 100%;
margin-top: 1.5rem;
border: 1px solid black;
border-radius: 1rem;
background-color: #FFFFFF;
gap: 10rem;

.sec_wrapper{
    height: 100%;
    width: 100%;
    padding: 1rem;
    gap:2rem;
    .tittle{
        height: 45%;
        width: 100%;
        display: flex;
        gap: 31.3rem;

        .right_sec{
            display: flex;
            gap: 1rem;
        }
        
      .activeicon {
            border: 1px solid gray;
            border-radius: 0.7rem;
            height: 50%;
            width: 4rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.3rem;
            background-color: #DEFFEA;
            color: green;
            font-size: 12px;
        }

        .view_details{
            height: 80%;
            width: 7rem;
            border-radius: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid gray;
        }
        
    }
    .investment{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 3rem;
    }
}
`