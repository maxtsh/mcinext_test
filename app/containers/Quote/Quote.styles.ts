import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .back {
    width: max-content;
    margin: 1rem;
  }

  .person {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__pic-id {
      font-size: 1.25rem;
      font-weight: 400;
    }

    &__no-pic {
      display: flex;
      justify-content: center;
      margin-top: 0.5rem;

      &__text {
        font-size: 1rem;
        font-weight: 400;
        padding: 0.5rem;
        color: #fff;
        border-radius: 4px;
        background-color: var(--pm-red);
      }
    }

    &__img {
      width: 200px;
      height: auto;
      border-radius: 4px;
      box-shadow: var(--bx-sh-2);
    }

    &__button {
      margin-top: 2rem;
    }
  }
`;
