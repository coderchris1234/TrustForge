import styled from "styled-components";

/* --- breakpoints --- */
const breakpoints = {
  mobile: "480px",
  mobileLarge: "768px", // phones in landscape / small tablets
  tablet: "1024px", // larger tablets
};

export const Explorecontainer = styled.div`
  height: max-content;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;

  section {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.75rem;

      p {
        cursor: pointer;
        background-color: transparent;
        border: 1px solid lightgray;
        padding: 0.4rem 0.8rem;
        border-radius: 0.4rem;
        font-size: 14px;
        white-space: nowrap;

        &:hover {
          background-color: #f0f0f0;
        }
      }
    }
  }

  .exploreText {
    height: auto;
    width: 100%;

    h1 {
      color: #1b1b1b;
      font-family: Poppins, sans-serif;
      font-size: 25px;
      font-weight: 600;
      line-height: 125%;
      margin: 0;
    }

    p {
      color: #1b1b1b;
      font-family: Poppins, sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 150%;
      margin: 0.25rem 0 0 0;
    }

    @media (max-width: ${breakpoints.tablet}) {
      h1 {
        font-size: 22px;
      }
      p {
        font-size: 17px;
      }
    }

    @media (max-width: ${breakpoints.mobileLarge}) {
      h1 {
        font-size: 20px;
      }
      p {
        font-size: 15.5px;
      }
    }

    @media (max-width: ${breakpoints.mobile}) {
      h1 {
        font-size: 18px;
        line-height: 120%;
      }
      p {
        font-size: 14.5px;
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
  gap: 0.6rem;
  flex-wrap: nowrap;
  box-sizing: border-box;

  .mind {
    /* background-color: #ffffff; */
    background-color: rgba(227, 227, 227, 0.8);

    /* background-color: green; */
    border: none;
    outline: none;
    padding: 1rem;
    cursor: pointer;
    border-radius: 8px;
    padding: 10px 18px;
    min-height: 44px;
  }

  .filterBtn {
    padding: 10px 18px;
    border: none;
    background: black;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    min-height: 44px;
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
    z-index: 9999;
    overflow-y: auto;
    box-sizing: border-box;
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
    padding: 6px;
    line-height: 1;
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
    gap: 0.6rem;
    padding: 0 10px;
    border-radius: 0.4rem;
    box-sizing: border-box;
    min-width: 0;

    @media (max-width: ${breakpoints.tablet}) {
      width: calc(100% - 120px);
    }

    @media (max-width: ${breakpoints.mobileLarge}) {
      width: calc(100% - 72px);
    }

    @media (max-width: ${breakpoints.mobile}) {
      width: calc(100% - 56px);
    }
  }

  .input {
    background-color: transparent;
    outline: none;
    border: none;
    width: 100%;
    font-size: 14px;
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
    box-sizing: border-box;

    p {
      margin: 0;
      line-height: 1;
      white-space: nowrap;
      font-size: 16px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      gap: 1.25rem;
      margin-left: 0.6rem;
      padding-inline: 0.5rem;
      p {
        font-size: 15px;
      }
    }

    @media (max-width: ${breakpoints.mobileLarge}) {
      width: auto;
      gap: 1rem;
      margin-left: 0.5rem;
      p {
        font-size: 14px;
      }
    }

    @media (max-width: ${breakpoints.mobile}) {
      display: none;
    }
  }

  .filter {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding-inline: 0.6rem;
    height: 3rem;
    border-radius: 0.4rem;
    background: #fff;
    cursor: pointer;
    box-sizing: border-box;
    min-width: 48px;
    white-space: nowrap;

    p {
      margin: 0;
      line-height: 1;
      font-size: 16px;
      display: inline-block;
    }

    @media (max-width: ${breakpoints.tablet}) {
      gap: 0.5rem;
      padding-inline: 0.5rem;
      p {
        font-size: 15px;
      }
    }

    @media (max-width: ${breakpoints.mobileLarge}) {
      gap: 0.4rem;
      padding-inline: 0.45rem;
      p {
        font-size: 14px;
      }
    }

    @media (max-width: ${breakpoints.mobile}) {
      gap: 0.25rem;
      padding-inline: 0.35rem;
      min-width: 44px;
      p {
        font-size: 13px;
      }

      &.filterIconOnly p {
        display: none;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    gap: 0.6rem;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    .drawer {
      right: -100%;
      width: 100%;
      max-width: 420px;
    }
    .drawer.show {
      right: 0;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    .drawer {
      width: 100%;
      right: -100%;
      padding: 18px;
    }
    .drawer.show {
      right: 0;
    }
    .search {
      width: calc(100% - 56px);
    }
  }
`;

export const Text = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  font-size: 18px;

  @media (max-width: ${breakpoints.mobileLarge}) {
    font-size: 16px;
    height: auto;
    padding: 0.5rem 0;
    flex-wrap: wrap;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 15px;
    padding: 0.5rem 0;
  }
`;
