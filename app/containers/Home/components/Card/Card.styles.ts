import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: 0.25rem;
  min-height: 200px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  transition: transform 0.3s ease;

  :hover {
    transform: scale(1.1);
  }

  .head {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    min-height: 60px;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    background-color: var(--pm-color);

    &__title {
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 0.85rem;
      font-weight: 500;
      color: #fff;
    }

    &__image,
    &__image-loader {
      position: absolute;
      top: 90%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80px;
      min-height: 80px;
      height: auto;
      border-radius: 50%;
    }

    &__image-loader {
      color: #fff;
      background-color: var(--dark-1);
    }

    &__image {
      width: 90px;
      height: 90px;
      border: 2px solid #fff;
      transition: transform 0.3s ease;

      :hover {
        transform: translate(-50%, -50%) scale(1.2);
      }
    }
  }

  .body {
    margin-top: 3rem;
    padding: 0.5rem;

    &__info {
      display: flex;
      flex-direction: column;

      &__name {
        text-align: center;
        font-size: 1.25rem;
        font-weight: 500;
      }

      &__status {
        text-align: center;
        font-size: 1rem;
        font-weight: 400;
      }

      &__details-list {
        margin-top: 0.5rem;
        list-style: none;

        &__item:not(:first-of-type) {
          margin-top: 0.25rem;
        }

        &__item {
          font-size: 0.85rem;
          font-weight: 400;
        }
      }
    }
  }

  .footer {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
`;
