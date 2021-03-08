import { api } from "../api"

export const authRequestService = (username, password) => {
    return api.post('/auth/login/')
}