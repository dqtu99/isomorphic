import TopProductApi from "@/api/e-commerce/topProduct/topProductApi";
import { useQuery } from "@tanstack/react-query";
import topProductKeysFactory from "./topProductKeysFactory";

const useGetTopProduct = (params: object) => {
  const { data } = useQuery({
    queryKey: topProductKeysFactory.list(params),
    queryFn: () => TopProductApi.getTopProduct(params),
  });
  return { topProductList: data?.data };
};
export default useGetTopProduct;
