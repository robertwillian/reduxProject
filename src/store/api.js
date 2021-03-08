import axios from "axios";

export const base_url = "http://admindenis/api";

export const api = axios.create({
    baseURL: base_url
})