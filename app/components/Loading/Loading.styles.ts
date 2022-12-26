import styled, { keyframes } from "styled-components";

const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .indicator {
    width: 48px;
    height: 48px;
    border: 5px solid var(--pm-color);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${rotation} 1s linear infinite;
  }

  .message {
    font-size: 0.85rem;
    font-weight: 400;
    margin: 0.25rem 0 0 0;
  }
`;
