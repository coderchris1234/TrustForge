import styled from "styled-components";

export const Explorecontainer = styled.div`
height: 100vh;
width: 100%;
padding: 25px;

.exploreText{
    height: 70px;
    width: max-content;
   h1{
    color: #1B1B1B;
    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%; 
    }
    p{
      color: #1B1B1B;
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; 
    }
}
`;

export const SearchContainer = styled.div`
  margin-top: 20px;
  height: 2rem;
  width: 66rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  .search{
      background-color: rgba(227, 227, 227, 0.80);
      height: 2rem;
      width: 45rem;
      display: flex;
      align-items: center;  
      gap: 0.4rem;
      padding: 0 10px;  
      border-radius: 0.4rem;
  }

  .input{
    background-color: transparent;
    outline: none;
    border: none;
    width: 100%;
  }

  .trending{
    height: 100%;
    width: 11rem;
    background-color:  rgba(227, 227, 227, 0.80);
    margin-left: 1rem;
    display: flex;
    align-items: center; 
    gap: 3.5rem;
    border-radius: 0.4rem;
    padding-inline: 0.7rem;
      p {
     margin: 0;
     line-height: 1;
     white-space: nowrap;
     display: inline-block;
   }
  }

  .filter{
    height: 100%;
    width: 7rem;
    background-color:  #FFF;
    margin-left: 2rem;
    display: flex;
    border-radius: 0.4rem;
    align-items: center;
    gap: 2rem;
    padding-inline: 0.8rem;
      p {
     margin: 0;     
      line-height: 1;
      white-space: nowrap;
      display: inline-block;
  }
}
`;
export const Text = styled.div`
  margin-top: 20px;
`;