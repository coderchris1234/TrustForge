import styled from "styled-components"
export const Not_container = styled.div`
    height: 100%;
    width: 100%;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    
 
    .not_wrapper{
        height: 8rem;
        width: 100%;
        padding-left: 0.4rem;
        background-color: #D6E8FF;
        padding: 1rem;
        border-radius: 1rem;
         border-left: 0.6rem solid #0038CC;

        .not_top{
            height: 40%;
            width: 100%;
            display: flex;
            justify-content: space-between;


            .not_top_left{
                width: 40%;
                height: 100%;
                display: flex;
                gap: 1rem;

                .bulb{
                    height: 1.8rem;
                    width: 1.8rem;
                    background-color:#2044744b;
                    color: blue;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 1rem;
                }
               .new_text{
                font-weight: 600;
               } 
            }
            .new_btn{
                height: 2rem;
                width: 4rem;
                border-radius: 0.4rem;
                background-color: #0038CC;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        .not_bottom{
            padding-left: 2.5rem;
            
            span{
                font-weight: 300;
            }
        }
    }
`