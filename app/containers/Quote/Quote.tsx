import Loading from "components/Loading";
import Image from "components/Image";
import Error from "components/Error";
import SEO from "seo/index";
import ErrorBoundary from "components/ErrorBoundary";
import Button from "components/Button";
import useManager from "./useManager";
import { Container } from "./Quote.styles";

const Quote: React.FC = () => {
  const {
    noMoreImg,
    imgId,
    data,
    isSuccess,
    isLoading,
    isError,
    error,
    handleImage,
    handleBack,
  } = useManager();

  return (
    <ErrorBoundary>
      <Container>
        <SEO title="Quotes | MCINEXT_TEST" />
        <Button className="back" onClick={handleBack}>
          Go Back
        </Button>
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
        {isSuccess && (
          <div className="person">
            <Image
              width="200px"
              height="200px"
              className="person__img"
              loaderClassName="head__image-loader"
              source={
                data?.data?._embedded?.images?.[imgId]?._links?.self?.href ||
                "/public/images/avatar.png"
              }
            />
            <h2 className="person__pic-id">
              <b>Picture ID:</b>
              {data?.data?._embedded?.images?.[imgId]?.picture_id || "Unkown"}
            </h2>
            {noMoreImg && (
              <div className="person__no-pic">
                <p className="person__no-pic__text">No more images!</p>
              </div>
            )}
            <Button className="person__button" onClick={handleImage}>
              Change Image
            </Button>
          </div>
        )}
      </Container>
    </ErrorBoundary>
  );
};

export default Quote;
