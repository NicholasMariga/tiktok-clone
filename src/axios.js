import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktokclonee-backend.herokuapp.com/",
});

export default instance;
