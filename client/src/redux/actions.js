import axios from "axios";

export function sendEmail(data){
    return async function (dispatch){
        const response = await axios.post("/contact", data)
        return response.data
    }
}