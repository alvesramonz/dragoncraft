import axios from "axios";

const dragonApi = axios.create({
  baseURL: "http://5c4b2a47aa8ee500142b4887.mockapi.io",
});

export default dragonApi;