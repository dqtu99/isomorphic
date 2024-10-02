import Proxy from "@/api";

const TopProductApi = {
  getTopProduct: (param: object) =>
    new Proxy("/product").setParams({ ...param }).get(),
};

export default TopProductApi;
