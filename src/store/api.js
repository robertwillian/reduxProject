import axios from "axios";

export const base_url = "http://localhost:3333/api";

export const api = axios.create({
    baseURL: base_url
})