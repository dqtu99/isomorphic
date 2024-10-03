import Proxy from "@/api";

const recentOrderApi = {
  getRecentOrder: (param: object) =>
    new Proxy("/recent-order").setParams({ ...param }).get(),
};

export default recentOrderApi;
