export const toggleAsideMenu = (visibilityMenuAside) => {
    return {
        type: 'TOGGLE_ASIDE_MENU',
        payload: {
            visibilityMenuAside,

        }
    }
}