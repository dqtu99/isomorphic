import { useQuery } from "@tanstack/react-query";
import recentOrderKeysFactory from "./recentOrderKeysFactory";
import recentOrderApi from "@/api/e-commerce/recentOrderApi/recentOrderApi";

const useGetRecentOrder = (params: object) => {
  const { data } = useQuery({
    queryKey: recentOrderKeysFactory.list(params),
    queryFn: () => recentOrderApi.getRecentOrder(params),
    select: (data) => data?.data,
  });
  return { recentOrderList: data };
};
export default useGetRecentOrder;
