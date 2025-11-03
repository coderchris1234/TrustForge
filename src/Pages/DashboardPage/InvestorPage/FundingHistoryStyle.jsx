import styled from "styled-components"
export const FundingHistory_contianer = styled.div`
    height: 100%;
    width: 100%;
    padding: 1rem;

    h1{
        font-size: 22px;
        font-family: "poppins" sans-serif;
        font-weight: 600;
    }
    p{
        font-size: 16px;
        font-family: "poppins" sans-serif;
        font-weight: 400;
    }
    .read_unread {
        height: 2.5rem;
        width: 100%;
        background-color: #C1C1C1;
        padding: 0.4rem;
        display: flex;
        border-radius: 2rem;
        margin-top: 1.4rem;
        .active{
            height: 100%;
            width: 35%;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 2rem;
            font-weight: 500;

        }
        .pending{
            height: 100%;
            width: 35%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 2rem;
            font-weight: 500;
        }
        .completed{
            height: 100%;
            width: 35%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 2rem;
            font-weight: 500;

        }
    }
`