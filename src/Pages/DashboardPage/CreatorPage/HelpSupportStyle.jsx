const Wrapper = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  font-family: Poppins;
`;

const Section = styled.div`
  margin-bottom: 2rem;

  h2 {
    font-size: 20px;
    margin-bottom: 1rem;
    color: #1b1b1b;
  }
`;

const FAQ = styled.div`
  margin-bottom: 1rem;
  cursor: pointer;
`;

const Question = styled.div`
  font-weight: 600;
  color: #333;
`;

const Answer = styled.div`
  margin-top: 0.5rem;
  padding-left: 1rem;
  color: #555;
  font-size: 14px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input,
  textarea {
    padding: 0.8rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 14px;
  }

  button {
    background-color: #00a3ff;
    color: white;
    border: none;
    padding: 0.8rem;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: #007acc;
    }
  }
`;

const Contact = styled.div`
  p {
    font-size: 14px;
    margin: 0.5rem 0;
  }
`;
