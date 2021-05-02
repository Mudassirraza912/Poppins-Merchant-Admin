import { postApi, getApi, postApiWithToken } from '../../api/fakeApiUser'
import base_url from '../../constants/base_url'

import swal from 'sweetalert';
import { CustomModal } from '../../Component/CustomModal';

export const fetchUserRequest = () => {
  return {
    type: 'FETCH_USER_REQUEST'
  }
}

export const fetchUserSuccess = users => {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload: users
  }
}

export const fetchUserFail = () => {
  return {
    type: 'FETCH_USER_FAILED'
  }
}

export const fetchDataUser = () => async dispatch => {
  try {
    dispatch(fetchUserRequest())
    // const { data } = await getUser()
    // dispatch(fetchUserSuccess(data))
  } catch (error) {
    dispatch(fetchUserFail())
  }
}


export const userRegister = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "USER_REGISTER_PROCESSING" })
      let { data } = await postApi(`${base_url}/owners/create_owner`, user)

      console.log("user Registration response", data)

      if (data.code == 200) {
        swal("Success", "Owner Registerd Successfully", "success")
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

export const userLogin = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "USER_LOGIN_PROCESSING" })
      let { data } = await postApi(`${base_url}/owners/login_owner`, user)

      console.log("Owner Registration response", data)

      if (data.code == 200) {
        // swal("Success", "Owner Login Successfully", "success")
        
        dispatch({ type: "USER_LOGIN_PROCESSED", payload: data.payload })
        return Promise.resolve({ status: true })
        // NavigationSer.navigate("SignIn")
      } else {
        swal("error", data.message, "error")
        dispatch({ type: "USER_LOGIN_PROCESSED", payload: null })
        return Promise.resolve({ status: false })
      }


    } catch ({ message }) {
      console.log("registration Error", message)
      dispatch({ type: "CLEAR_PROCESSING" })
      return Promise.reject({ status: false, message })
    }
  }
}

export const forgetPass = (obj) => {
  return async (dispatch) => {
    try {
      dispatch({type: 'FETCHING'})
      let { data } = await postApi(`${base_url}/owners/forgot_password`, obj)
      const {payload} = data
      if (data.code == 200) {
        payload.email = obj.email
        dispatch({ type: "FETCHED_RESET_PASS_TOKEN", payload: payload })
        return Promise.resolve({ status: true, data: payload })
      } else {
        swal("error", data.message, "error")
        dispatch({ type: "ERROR" })
        return Promise.resolve({ status: false, })
      }
    } catch ({message}) {
      dispatch({ type: "ERROR" })
      swal("error", message, "error")
      return Promise.reject({ status: false, message })
    }
  }
}

export const changePass = (obj, authToken) => {
  return async (dispatch) => {
    let {data} = await getApi(`${base_url}/owners/validate_reset_pw_token/${authToken}`, authToken)
    console.log("isValid validate_reset_pw_token", data,)
    
    if(data.code == 200) {
      try {
        dispatch({type: 'FETCHING'})
        let { data } = await postApiWithToken(`${base_url}/owners/change_password`, obj, authToken)
        console.log("data changePass", data)
        if (data.code == 200) {
          // alert("Alert", data.message)
          swal("Success", "Password changed successfull", "success")
          return Promise.resolve({ status: true })
        } else {
          swal("Error", data.message, "error")
          dispatch({ type: "ERROR" })
          return Promise.resolve({ status: false })
        }
      } catch ({message}) {
        dispatch({ type: "ERROR" })
        swal("error", message, "error")
        return Promise.reject({ status: false, message })
      }
    }else {
      swal("Error", data.message, "error")
      return Promise.reject({ status: false })
    }
    
  }
}