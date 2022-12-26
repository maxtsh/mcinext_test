import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .actions {
    display: flex;
    padding: 1rem 2rem;

    &__search,
    &__sort,
    &__limit {
      height: 40px;
      border-radius: 4px;
      outline: none;
      border: 1px solid var(--dark-2);
    }

    &__search {
      flex: 50%;
      clear: both;
      padding: 15px 10px;
      display: inline-block;
      box-sizing: border-box;
      transition: all 0.2s ease;
      margin-right: 0.5rem;

      :focus {
        border-color: #000;
      }
    }

    &__sort {
      flex: 15%;
      margin-right: 0.5rem;
    }

    &__limit {
      flex: 10%;
    }
  }

  .chars {
    display: grid;
    justify-content: space-evenly;
    align-content: space-between;
    align-items: start;
    padding: 2rem 1.5rem;
    grid-gap: 2rem 2rem;
    grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  }
`;
