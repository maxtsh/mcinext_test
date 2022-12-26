import SEO from "seo/index";
import useManager from "./useManager";
import { Container } from "./Home.styles";
import Card from "./components/Card";
import Loading from "components/Loading";
import Error from "components/Error";
import ErrorBoundary from "components/ErrorBoundary";

const Home: React.FC = () => {
  const {
    state,
    data,
    isSuccess,
    isLoading,
    isError,
    error,
    handleSort,
    handleSearch,
    handleChangeLimit,
  } = useManager();

  return (
    <ErrorBoundary>
      <Container>
        <SEO title="Home | MCINEXT_TEST" />
        <div className="actions">
          <input
            name="search"
            placeholder="Search..."
            onChange={handleSearch}
            className="actions__search"
          />
          <select
            value={state.sort}
            onChange={handleSort}
            className="actions__sort">
            <option disabled value="sort">
              Sort by
            </option>
            <option value="forename">Forename</option>
            <option value="name">Name</option>
            <option value="date_of_birth">Birthday</option>
          </select>
          <select
            value={state.limit}
            onChange={handleChangeLimit}
            className="actions__limit">
            <option disabled value="limit">
              Result limit
            </option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
        {isLoading && (
          <div className="center">
            <Loading message="Fetching..." />
          </div>
        )}
        {isError && (
          <div className="center">
            <Error
              message={`${error?.message}, ${
                error?.code === "ERR_NETWORK" || error?.code === "ECONNABORTED"
                  ? "make sure to use VPN in case of being in Iran"
                  : ""
              }`}
            />
          </div>
        )}
        <div className="chars">
          {isSuccess &&
            data?.data?._embedded?.notices
              ?.sort((a, b) => {
                if (a[state.sort] < b[state.sort]) return -1;
                if (b[state.sort] < a[state.sort]) return 1;
                return 0;
              })
              ?.map((item) => <Card key={item.entity_id} data={item} />)}
        </div>
        {isSuccess && (data?.data?._embedded?.notices?.length || 0) < 1 && (
          <div className="center">
            <h3>No Result!</h3>
          </div>
        )}
      </Container>
    </ErrorBoundary>
  );
};

export default Home;
