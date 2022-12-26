import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  padding: 1rem;

  .sidebar {
    flex: 15%;
    padding: 1rem;
    border-radius: 4px;
    margin-right: 1rem;
    box-shadow: var(--bx-sh-1);
    border: 1px solid var(--border-1);

    &__logo {
      margin-top: 1rem;
      width: 100%;
      height: auto;
    }

    &__title {
      margin-top: 1rem;
      text-align: center;
      font-size: 1.25rem;
      font-weight: 500;
    }
  }

  .content {
    flex: 85%;
    display: flex;
    flex-direction: column;

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem;
      border-radius: 4px;
      margin-bottom: 1rem;
      min-height: 80px;
      border: 1px solid var(--border-1);
      box-shadow: var(--bx-sh-1);

      &__title {
        font-size: 1.5rem;
        font-weight: 700;
      }

      &__avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }

    &__body {
      height: calc(100% - 80px + 1rem);
      overflow-y: auto;
      border-radius: 4px;
      border: 1px solid var(--border-1);
      box-shadow: var(--bx-sh-1);
    }
  }
`;
