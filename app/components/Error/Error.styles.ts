import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0.5rem;
  height: 30px;
  background-color: #eee;

  .message {
    font-size: 1rem;
    font-weight: 400;
    color: var(--pm-red);
  }
`;
