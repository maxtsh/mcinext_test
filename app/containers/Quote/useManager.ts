import useReactQuery from "hooks/useReactQuery";
import { useParams, useNavigate } from "react-router-dom";
import { DataType } from "./Quote.types";
import { useState } from "react";

const useManager = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imgId, setImgId] = useState<number>(0);
  const [noMoreImg, setNorMoreImg] = useState<boolean>(false);
  const { data, isSuccess, isLoading, error, isError } =
    useReactQuery<DataType>(
      {
        key: ["images", id],
        method: "GET",
        url: `red/${id || ""}/images`,
      },
      { retry: 1 },
    );

  //** Handlers */
  const handleImage = () => {
    // If the user has multiple images then iterate eg: check => quotes/2022-83296
    if ((data?.data?._embedded?.images?.length || 0) <= 1) {
      setNorMoreImg(true);
    } else {
      setImgId((prev) => {
        if (prev + 1 < (data?.data?._embedded?.images?.length || 0))
          return prev + 1;
        return 0;
      });
    }
  };

  const handleBack = () => navigate("/");

  return {
    noMoreImg,
    imgId,
    data,
    isSuccess,
    isLoading,
    isError,
    error,
    handleImage,
    handleBack,
  };
};
export default useManager;
