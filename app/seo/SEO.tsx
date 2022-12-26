import { useEffect } from "react";
import type { IProps } from "./types";

const SEO: React.FC<IProps> = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return null;
};

export default SEO;
