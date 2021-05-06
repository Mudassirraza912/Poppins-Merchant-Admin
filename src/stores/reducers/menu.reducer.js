const initialState = {
    menu: [],
    isLoading: false,
}

export const menuReducer = (state = initialState, action) => {
    const { payload } = action
    switch (action.type) {
        case 'GET_ALL_MENU_PROCESSING':
            return {
                ...state,
                isLoading: true
            }

        case 'GET_ALL_MENU_PROCESSED':
            return {
                ...state,
                menu: payload,
                isLoading: false
            }

        default:
            return state
    }
}

export default menuReducer
