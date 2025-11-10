import React from "react";
import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
`;

export const ModalBox = styled.div`
  background: #fff;
  width: 40%;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  .upCase {
    display: flex;
    justify-content: space-between;
  }

  .input {
    /* background-color: red; */
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    select {
      padding: 1rem;
      border: none;
      border-radius: 8px;
      border: 1px solid lightgray;
      outline: none;
    }

    button {
      width: 100%;
      padding: 1rem;
      border: none;
      border-radius: 12px;
      background-color: var(--primary_color_500);
      color: #ffff;
      cursor: pointer;
    }

    input {
      padding: 1rem;
      width: 100%;
      border: none;
      border-radius: 12px;
      border: 1px solid lightgray;
      outline: none;
    }

    .meeting {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 0.5rem;
    }
  }

  .dateInput {
    /* background-color: blue; */
    display: flex;
    justify-content: space-between;
  }
`;
