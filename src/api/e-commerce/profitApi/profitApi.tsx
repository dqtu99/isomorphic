import Proxy from "@/api";

const profitApi = {
  getTotalProfit: () => new Proxy("/total-profit").get(),
};

export default profitApi;
