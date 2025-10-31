import styled from "styled-components"
export const Nda_container = styled.div`
height: 100%;
width: 100%;
margin-top: 1.7rem;

.ndadata_main{
    height: 12rem;
    width: 100%;
    padding: 1rem;
    border: 1px solid gray;
    border-radius: 0.8rem;
    background-color: #fff;

    .nda_top{
        display: flex;
        justify-content: space-between;
        height: 4rem;
    }
    
    .download{
        height: 100%;
        width: 22rem;
        display: flex;
        gap: 3.1rem;
        .sign_icon{
            height: 1.6rem;
            width: 4.7rem;
            color: green;
            background-color: #DEFFEA;
            gap: 0.3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0.8rem;
            font-size: 12px;
        }
        .download_view{
            height: 3rem;
            width: 7rem;
            gap: 0.3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0.8rem;
            border: 1px solid gray;
        }
        .view{
            height: 2rem;
            width: 4rem;
            gap: 0.3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0.8rem;
            border: 1px solid gray;
        }
    }
    .nda_bottom{
        height: 7rem;
        width: 100%;
        display: flex;
        gap: 7rem;

        .date{
            height: 4rem;
            display: flex;
            flex-direction: column;
        }
        span{
            color: green;
        }
    }
}
`