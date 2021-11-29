import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

class ApiService {
  constructor(baseURL = BASE_URL) {
    this.service = axios.create({
      baseURL,
      responseType: "json",
    });
  }

  async get(path) {
    return await this.service.get(path).then((res) => res.data);
  }

  async post(path, payload) {
    return await this.service.post(path, payload).then((res) => res.data);
  }
}

export default new ApiService();
