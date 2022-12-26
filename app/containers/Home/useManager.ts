import { useReducer } from "react";
import useReactQuery from "hooks/useReactQuery";
import debounce from "utils/debounce";
import { initialState, reducer } from "./reducer";
import type { DataType, Sort } from "./Home.types";

const useManager = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, isSuccess, isLoading, error, isError } =
    useReactQuery<DataType>(
      {
        key: ["rednotice", state.search, state.limit, state.page],
        method: "GET",
        url: `red?page=${state.page}&resultPerPage=${state.limit}${
          state.search ? "&forename=" + state.search : ""
        }`,
      },
      { retry: 1 },
    );

  //** Handlers */
  const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "search", payload: e.target.value });
  }, 750);

  const handleChangeLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "limit", payload: Number(e.target.value) });
  };

  // Note: The API does not support sort functionality, I simulated it using array.sort in the client side
  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "sort", payload: e.target.value as Sort });
  };

  return {
    state,
    data,
    isSuccess,
    isLoading,
    isError,
    error,
    handleSort,
    handleSearch,
    handleChangeLimit,
  };
};
export default useManager;
