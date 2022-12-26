import LazyLoading from "utils/LazyLoading";
import Fallback from "./Fallback";

export default LazyLoading(
  () => import(/* webpackChunkName: "Home" */ "./index"),
  { Fallback }
);
