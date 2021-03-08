import { api } from "../api"

export const authRequestService = ({username, password}) => {
    return api.post('login', {
        data: {
            username,
            password
        }
    })
}