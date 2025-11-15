import styled from "styled-components";

export const Professional_container = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(2, 6, 23, 0.04);
  border: 1px solid rgba(15, 23, 42, 0.03);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto,
    "Helvetica Neue", Arial;

  .upper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      border: 1px solid lightgrey;
      padding: 0.5rem;
      border-radius: 8px;
    }
  }

  .secure {
    background-color: var(--primary_color_100);
    color: var(--primary_color_500);
    border-radius: 8px;
    padding: 1rem;
    margin-top: 1rem;
  }

  .security {
    background-color: lightgrey;
    padding: 0.3rem;
  }
  .details_row {
    display: flex;
    gap: 32px;
    margin-top: 6px;
    align-items: flex-start;
  }
`;
