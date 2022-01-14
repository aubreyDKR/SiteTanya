import axios from "axios";
import { API_SERVER } from "./constants/url";

export const publicRequest = axios.create({
    baseURL: API_SERVER,
    withCredentials: true,
});