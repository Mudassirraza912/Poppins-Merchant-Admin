//example api request: replace with your API request here in folder API
import axios from 'axios'


export const getApi = async (url, data) => {
  try {
    let response = await axios.get(url + data)
    console.log(response, "response")
    if (response.status == 200) {
      return Promise.resolve({
        status: 'success',
        data: response.data
      })
    }
  } catch (e) {
    return Promise.reject(e)
  }
}

export const postApi = async (url, data) => {
  console.log(url, data)
  try {
    let response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    console.log(response, "response")
    if (response.status == 200) {
      return Promise.resolve({
        status: 'success',
        data: response.data
      })
    }
  } catch (e) {
    return Promise.reject(e)
  }
}


export const getApiWithToken = async (url, data, token) => {
  try {
    let response = await axios.get(url + data, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    console.log(response, "response")
    if (response.status == 200) {
      return Promise.resolve({
        status: 'success',
        data: response.data
      })
    }
  } catch (e) {
    return Promise.reject(e)
  }
}

export const postApiWithToken = async (url, data, token) => {
  console.log(url, data)
  try {
    let response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    console.log(response, "response")
    if (response.status == 200) {
      return Promise.resolve({
        status: 'success',
        data: response.data
      })
    }
  } catch (e) {
    return Promise.reject(e)
  }
}

// module.exports = {
//   postApi,
//   getApi
// }