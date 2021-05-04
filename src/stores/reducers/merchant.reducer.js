const initialState = {
    merchants: [],
    isLoading: false,
}

export const merchantReducer = (state = initialState, action) => {
    const { payload } = action
    switch (action.type) {
        case 'GET_ALL_MERCHANTS_PROCESSING':
            return {
                ...state,
                isLoading: true
            }

        case 'GET_ALL_MERCHANTS_PROCESSED':
            return {
                ...state,
                merchants: payload,
                isLoading: false
            }

        default:
            return state
    }
}

export default merchantReducer
