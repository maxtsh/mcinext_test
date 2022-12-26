import Image from "components/Image";
import Button from "components/Button";
import { Container } from "./Card.styles";
import type { IProps } from "./Card.types";
import { useNavigate } from "react-router-dom";

const Card: React.FC<IProps> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() =>
        navigate(`quotes/${data?.entity_id.replaceAll("/", "-") || ""}`)
      }>
      <div className="head">
        <p className="head__title">U.S. FBI</p>
        <Image
          className="head__image"
          loaderClassName="head__image-loader"
          source={data?._links?.thumbnail?.href || "/public/images/avatar.png"}
        />
      </div>
      <div className="body">
        <div className="body__info">
          <h2 className="body__info__name">{data?.forename || ""}</h2>
          <h5 className="body__info__status">{data?.entity_id || ""}</h5>
          <ul className="body__info__details-list">
            <li className="body__info__details-list__item">
              <b>Name:</b> {data?.name || ""}
            </li>
            <li className="body__info__details-list__item">
              <b>Birthday:</b> {data?.date_of_birth || ""}
            </li>
          </ul>
        </div>
        <div className="footer">
          <Button>View Details</Button>
        </div>
      </div>
    </Container>
  );
};

export default Card;
