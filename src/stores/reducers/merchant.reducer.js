const initialState = {
    merchants: [],
    isLoading: false,
}

export const merchantReducer = (state = initialState, action) => {
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

        default:
            return state
    }
}

export default merchantReducer
