import styled from "styled-components";

export const Explorecontainer = styled.div`
  height: max-content;
  width: 100%;
  padding: 1rem;

  section {
    /* background-color: grey; */
    display: flex;
    flex-direction: column;
    gap: 2rem;

    div {
      display: flex;
      justify-content: space-between;

      p {
        cursor: pointer;
        background-color: transparent;
        border: 1px solid lightgray;
        padding: 0.4rem 0.8rem;
        border-radius: 0.4rem;
        font-size: 14px;

        &:hover {
          background-color: #f0f0f0;
        }
      }
    }
  }

  .exploreText {
    height: 70px;
    width: max-content;

    h1 {
      color: #1b1b1b;
      font-family: Poppins;
      font-size: 25px;
      font-weight: 600;
      line-height: 125%;
    }

    p {
      color: #1b1b1b;
      font-family: Poppins;
      font-size: 18px;
      font-weight: 400;
      line-height: 150%;
    }

    @media (max-width: 480px) {
      h1 {
        font-size: 20px;
        line-height: 120%;
      }

      p {
        font-size: 15px;
        line-height: 140%;
      }
    }
  }
`;

export const SearchContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: nowrap;

  .filterBtn {
    padding: 10px 18px;
    border: none;
    background: black;
    color: white;
    border-radius: 8px;
    cursor: pointer;
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.25);
    z-index: 20;
  }

  .drawer {
    position: fixed;
    top: 0;
    right: -350px;
    width: 350px;
    height: 100vh;
    background: white;
    padding: 25px;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    transition: right 0.35s ease;
    z-index: 30;
    overflow-y: auto;
  }

  .drawer.show {
    right: 0;
  }

  .drawerHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .closeBtn {
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .sub {
    margin-top: -10px;
    font-size: 13px;
    color: #777;
  }

  .title {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1rem;
  }

  .clearBtn {
    margin-top: 25px;
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    background: transparent;
    border-radius: 10px;
    cursor: pointer;
  }

  .search {
    background-color: rgba(227, 227, 227, 0.8);
    height: 3rem;
    width: 90%;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0 10px;
    border-radius: 0.4rem;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .input {
    background-color: transparent;
    outline: none;
    border: none;
    width: 100%;
  }

  .trending {
    width: 11rem;
    height: 3rem;
    background-color: rgba(227, 227, 227, 0.8);
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
      font-size: 16px;
    }

    @media (max-width: 768px) {
      width: auto;
      gap: 1rem;
      margin-left: 0.5rem;
      padding-inline: 0.5rem;

      p {
        font-size: 14px;
      }
    }

    @media (max-width: 480px) {
      display: none;
    }
  }

  .filter {
    width: 7rem;
    height: 3rem;
    background-color: #fff;
    margin-left: 2rem;
    display: flex;
    border-radius: 0.4rem;
    align-items: center;
    gap: 2rem;
    padding-inline: 0.8rem;
    cursor: pointer;

    p {
      margin: 0;
      line-height: 1;
      font-size: 18px;
      white-space: nowrap;
      display: inline-block;
    }

    @media (max-width: 768px) {
      width: auto;
      gap: 1rem;
      margin-left: 0.5rem;
      padding-inline: 0.5rem;

      p {
        font-size: 14px;
      }
    }

    @media (max-width: 480px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0.8rem;
  }
`;

export const Text = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  font-size: 18px;

  @media (max-width: 480px) {
    font-size: 16px;
    height: auto;
    padding: 0.5rem 0;
  }
`;
