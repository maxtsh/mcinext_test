import styled from "styled-components";

export const BTN = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 400;
  padding: 0.25rem 0.5rem;
  outline: none;
  border: none;
  cursor: pointer;
  height: 40px;
  color: #fff;
  border-radius: 4px;
  background-color: var(--pm-color);
  transition: background-color 0.2s ease;

  :hover {
    background-color: var(--pm-color-dark-1);
  }
`;
