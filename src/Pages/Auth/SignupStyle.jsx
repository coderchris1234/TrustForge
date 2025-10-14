import styled from "styled-components";

export const  FormContainer = styled.div`
    max-width: 450px;
    margin: 40px auto;
    padding: 40px;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);


    @media (max-width: 500px){
        padding: 25px;
    }
`;


export const FormTitle = styled.h2`
    text-align: center;
    margin-bottom: 25px;
    color: #1677ff;
    font-weight: 600;
`;


export const AlreadyAccount = styled.div`
    text-align: center;
    margin-top: 10px;


    a {
        color: #1677ff;
        font-weight: 500;
        text-decoration: none;



        &:hover{
            text-decoration: underline;
        }
    }
`