import { getApi, getApiWithToken, postApi, postApiWithToken } from "../../api/fakeApiUser";
import base_url from "../../constants/base_url";
import swal from 'sweetalert';

export const getAllMarchants = (token, ownerId) => {
  return async (dispatch) => {
    dispatch({ type: "GET_ALL_MERCHANTS_PROCESSING" })
    try {
      const { data } = await getApi(`${base_url}/merchants/get_merchants/${ownerId}`, "")

      if (data.code == 200) {
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

export const marchantRegister = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "MARCHANT_REGISTER_PROCESSING" })
      let { data } = await postApi(`${base_url}/merchants/create_merchant`, user)

      console.log("marchant Registration response", data)

      if (data.code == 200) {
        swal("Success", "Location Add Successfully", "success")
        return Promise.resolve({ status: true })
        // NavigationSer.navigate("SignIn")
      } else {
        swal("error", data.message, "error")
        return Promise.resolve({ status: false })
      }


    } catch ({ message }) {
      console.log("registration Error", message)
      return Promise.reject({ status: false, message })
    }
  }
}