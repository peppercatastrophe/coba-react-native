import axios from "axios";

const instance = axios.create({
  // insert server url here
  baseURL: "",
});

export default instance;
