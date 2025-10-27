import styled from "styled-components";
import role1 from '../../assets/role1.jpg';
import role2 from '../../assets/role2.jpg';
import role3 from '../../assets/role3.jpg';
export const ChooseRoleContainer = styled.div`
height: 100vh;
width: 100%;
display: flex;
gap: 70px;

`
export const ChooseRole_left = styled.div`
height: 100vh;
width: 43%;
 background: linear-gradient(
      0deg,
      rgba(0, 70, 255, 0.25) 0%,
      rgba(0, 70, 255, 0.25) 100%
    ),
    url(${role1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  `

export const ChoosRole_right = styled.div`
height: 100vh;
display: flex;
width: 54%;
flex-direction: column;
align-items: center;
justify-content: center;
h1{
  font-size: 32px;
  font-weight: 700;
    margin-bottom: 20px;
}
`
export const Roles = styled.div`
display: flex;
height: 40%;
width: 80%;
gap: 20px;
`
export const Startup = styled.div`
height: 100%;
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
.img_startup{
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 5px solid #0046FF;
    background: linear-gradient(
      0deg,
      rgba(0, 70, 255, 0.25) 0%,
      rgba(0, 70, 255, 0.25) 100%
    ),
    url(${role2});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
    cursor: pointer;
      &:hover{
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
}
}
.text1{
    margin-top: 20px;
    cursor: pointer;

    h3{
        font-size: 18px;
        font-weight: 600;
    }
 }
`;
export const Investor = styled.div`
height: 100%;
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
.img_investor{
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 5px solid #74E91C;
    background: linear-gradient(
      0deg,
      rgba(0, 70, 255, 0.25) 0%,
      rgba(0, 70, 255, 0.25) 100%
    ),
    url(${role3});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
    cursor: pointer;
      &:hover{
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
}
}
.text2{
    margin-top: 20px;
    cursor: pointer;
    h3{
        font-size: 18px;
        font-weight: 600;
    }
 }
`
