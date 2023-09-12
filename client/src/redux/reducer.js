const initialState = {
    emailSended: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEND_CONTACT_INFO":
            return{
                ...state,
                emailSended: true
            }
        default:
            return state
    }
}

export default reducer;