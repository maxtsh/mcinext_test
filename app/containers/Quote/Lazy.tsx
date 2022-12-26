import LazyLoading from "utils/LazyLoading";
import Fallback from "./Fallback";

export default LazyLoading(
  () => import(/* webpackChunkName: "Quotes" */ "./index"),
  { Fallback },
);
