import { useQuery } from "@tanstack/react-query";
import totalProfitKeysFactory from "./totalProfitKeysFactory";
import profitApi from "@/api/e-commerce/profitApi/profitApi";

const useGetTotalProfit = () => {
  const { data } = useQuery({
    queryKey: totalProfitKeysFactory.list(),
    queryFn: () => profitApi.getTotalProfit(),
  });
  return { profits: data?.data[0] };
};
export default useGetTotalProfit;
