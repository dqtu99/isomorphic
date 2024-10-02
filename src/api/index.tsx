import axiosInstance from "./axiosConfig";
// import axiosInstance from "axios";

class Proxy {
  private url: string;
  private body?: object;
  private params?: object;

  constructor(url: string) {
    this.url = url;
  }

  public setBody(body: object) {
    this.body = body;
    return this;
  }

  public setParams(params: object) {
    this.params = params;
    return this;
  }

  public get() {
    const params = this.params;
    return axiosInstance.get(this.url, { params });
  }

  public post() {
    const params = this.params;
    const body = this.body;
    return axiosInstance.post(this.url, body, { params });
  }
}
export default Proxy;
