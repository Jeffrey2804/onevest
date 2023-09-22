import axios from "axios";

const baseUrl = "https://advisor-buildout.onrender.com/api/";

export const authAxiosHelper = axios.create({ baseURL: baseUrl });
export const noAuthAxiosHelper = axios.create({ baseURL: baseUrl });
