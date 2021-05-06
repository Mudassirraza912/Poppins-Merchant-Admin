import { getApi, getApiWithToken, postApi, postApiWithToken } from "../../api/fakeApiUser";
import base_url from "../../constants/base_url";
import swal from 'sweetalert';

export const getAllMenu = (ownerId) => {
    return async (dispatch) => {
        dispatch({ type: "GET_ALL_MENU_PROCESSING" })
        try {
            const { data } = await getApi(`${base_url}/internals/get_all_base_menus/${ownerId}`, "")

            if (data.code == 200) {
                dispatch({ type: "GET_ALL_MENU_PROCESSED", payload: data.payload })
            } else {
                dispatch({ type: "GET_ALL_MENU_PROCESSED", payload: [] })
            }
        } catch ({ message }) {
            console.log(message);
            dispatch({ type: "CLEAR_PROCESSING" })
        }
    }
}

export const addMenu = (details) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "ADD_MENU_PROCESSING" })
            let { data } = await postApi(`${base_url}/internals/create_base_menu`, details)

            console.log("add menu response", data)

            if (data.code == 200) {
                swal("Success", "Menu Add Successfully", "success")
                return Promise.resolve({ status: true })
                // NavigationSer.navigate("SignIn")
            } else {
                swal("error", data.message, "error")
                return Promise.resolve({ status: false })
            }


        } catch ({ message }) {
            console.log("addmenu Error", message)
            return Promise.reject({ status: false, message })
        }
    }
}

export const addMenuCategory = (details) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "ADD_MENU_CATEGORY_PROCESSING" })
            let { data } = await postApi(`${base_url}/internals/add_category`, details)

            console.log("add menu response", data)

            if (data.code == 200) {
                swal("Success", "Menu Category Add Successfully", "success")
                return Promise.resolve({ status: true })
                // NavigationSer.navigate("SignIn")
            } else {
                swal("error", data.message, "error")
                return Promise.resolve({ status: false })
            }


        } catch ({ message }) {
            console.log("addmenu Error", message)
            return Promise.reject({ status: false, message })
        }
    }
}