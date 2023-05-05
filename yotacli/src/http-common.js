import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/yota/api/questions",
  headers: {
    "Content-type": "application/json"
  }
});