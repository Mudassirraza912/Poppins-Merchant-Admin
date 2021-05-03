import { getApiWithToken } from "../../api/fakeApiUser";
import base_url from "../../constants/base_url";

export const getAllMarchants = (token) => {
    return async (dispatch) => {
        dispatch({ type: "GET_ALL_MERCHANTS_PROCESSING" })
        try {
            const { data } = await getApiWithToken(`${base_url}/merchants/get_all_merchants`, "", token)

            if(data.status == 200){
                dispatch({ type: "GET_ALL_MERCHANTS_PROCESSED", payload: data.payload })
            } else {
                dispatch({ type: "GET_ALL_MERCHANTS_PROCESSED", payload: [] })
            }
        } catch ({ message }) {
            console.log(message);
            dispatch({ type: "CLEAR_PROCESSING" })
        }
    }
}