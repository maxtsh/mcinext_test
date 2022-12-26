import { useEffect, useState, memo } from "react";
import IMG, { Container } from "./Image.styles";
import type { Props, Status } from "./Image.types";

const NoImageUrl = '/assets/images/no-image-placeholder.png"';

const Image: React.FC<Props> = ({
  Fallback,
  source,
  altText,
  height,
  width,
  loaderClassName,
  ...props
}) => {
  const [status, setStatus] = useState<Status>({ loaded: false, error: false });

  // Clear the load state
  useEffect(() => () => setStatus({ loaded: false, error: false }), []);

  // Set Loaded to true on image load event
  const handleLoad = () => setStatus({ ...status, loaded: true });

  // Set Error to true on image error event
  const handleError = () => setStatus({ ...status, error: true });

  return (
    <>
      {!status.error && !status.loaded && (
        <Container
          className={loaderClassName}
          height={height || "50px"}
          width={width || "50px"}>
          <p>loading</p>
        </Container>
      )}
      <IMG
        onLoad={handleLoad}
        src={!status.error ? source || NoImageUrl : Fallback || NoImageUrl}
        loaded={status.loaded}
        onError={handleError}
        height={height || "50px"}
        width={width || "50px"}
        {...props}
      />
    </>
  );
};

export default memo(Image);
