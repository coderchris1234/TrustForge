import styled from "styled-components";

export const RecentIdeas = styled.div`
  width: 100%;
  background-color: #fff;
  height: fit-content;
  /* padding-top: 2rem; */
  /* height: 55%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding-top: 1.5rem;
  margin-top: 1rem;
  /* padding-bottom: 2.5rem; */
  overflow-y: scroll;
  /* background-color: red; */
  height: 400px;
  scrollbar-width: none;
  -ms-overflow-style: none;

  .wow {
    /* background-color: pink; */
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 2px solid lightgrey;
    margin: 0.5rem;
    border-radius: 8px;
    padding: 8px;

    .title {
      font-size: 18px;
      font-weight: 400;
      line-height: 23px;
    }
  }

  .ideaContent {
    /* background-color: red; */
    width: 99%;
  }

  .ideaLabel {
    /* background-color: pink; */
    display: flex;
    align-items: flex-start;
    gap: 8px;
    /* background-color: orange; */
    padding: 0;

    p {
      background: #9c9c9c;
      padding: 6px 4px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
    }

    span {
      background-color: var(--secondary_color_200);
      color: var(--secondary_color_900);
      padding: 6px 4px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
    }
  }

  .cont {
    /* background-color: green; */
    display: flex;
    justify-content: space-between;
    align-items: center;

    .ideaIcons {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .icons {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;
