const initialState = {
  users: [],
  isLoading: false,
  resetPassToken: '',
  user: null
}

export const userReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case 'FETCHING':
      return {
        ...state,
        isLoading: true
      }

    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        users: payload,
        isLoading: false
      }

    case 'USER_LOGIN_PROCESSING':
      return {
        ...state,
        isLoading: true
      }

    case 'USER_LOGIN_PROCESSED':
      return {
        ...state,
        user: payload,
        isLoading: false
      }

    case 'ERROR':
      return {
        ...state,
        isLoading: false
      }
    case 'FETCHED_RESET_PASS_TOKEN':
      return {
        ...state,
        isLoading: false,
        resetPassToken: payload
      }

    default:
      return state
  }
}

export default userReducer
