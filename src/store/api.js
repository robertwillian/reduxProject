import axios from "axios";

export const base_url = "https://api.lanchos.com/";

export const api = axios.create({
    baseURL: base_url
})