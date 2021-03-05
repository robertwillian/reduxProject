import { api } from "../api"

const authRequestService = (username, password) => {
    return api.post('/auth/login/')
}