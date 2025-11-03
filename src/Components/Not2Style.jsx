import styled from "styled-components"
export const Not2_container =styled.div`
     height: 100%;
    width: 100%;
    gap: 1rem;
    display: flex;
    flex-direction: column;

    .not2_wrapper{
        height: 8rem;
        width: 100%;
        padding-left: 0.4rem;
        background-color: #FFFFFF;
        padding: 1rem;
        border-radius: 1rem;

        .not2_top{
            height: 40%;
            width: 100%;
            display: flex;

            .not2_top_left{
                width: 40%;
                height: 100%;
                display: flex;
                gap: 1rem;

                .bulb2{
                    height: 1.8rem;
                    width: 1.8rem;
                    background-color:#C1C1C1;
                    color: purple;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 1rem;
                }
               .new_text2{
                font-weight: 600;
               } 
            }
        }
        .not2_bottom{
            padding-left: 2.5rem;

            span{
                font-weight: 300;
            }
        }
    }
`