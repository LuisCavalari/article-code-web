const initalState = {
    email: '',
    name: '',
    admin: false,
    logged:false,

}

export const user = (state = initalState, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            const { name, email, admin } = action.payload 
            return {
                ...state,
                email,
                name,
                admin,
            }


        default:
            return state
    }

}