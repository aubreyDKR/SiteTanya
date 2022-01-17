import { update, authFailure } from "./userRedux";
import { API_SERVER } from "../constants/url";
import axios from "axios";

export const getUserInfos = async (dispatch) => {
    await axios.get(API_SERVER + "auth/getUserInfos", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
        },
        withCredentials: true,
    }).then(response => {
        if (response.status === 200) {
            const { user } = response.data;
            dispatch(update({
                user,
            }))
        }
    }).catch((err) => {
        console.log(err);
        authFailure();
    });
}