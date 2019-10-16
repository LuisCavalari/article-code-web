export const signIn = (user) => {
    return {
        type: 'SIGN_IN',
        payload: {
            name: user.name,
            email: user.email,
            admin: user.admin,
        }
    }
}