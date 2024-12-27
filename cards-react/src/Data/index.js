import { BASE_URL } from "./constants";
import axios from "axios";

const getAllData = async (endpoint) => {
    try {
      const response = await axios(`${BASE_URL}/${endpoint}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
export default getAllData