const initialState = {
    visibilityMenuAside: true,
}

export const menu = (state = initialState, actions) => {
    switch (actions.type) {
        case 'TOGGLE_ASIDE_MENU':
            return { ...state, visibilityMenuAside: actions.payload.visibilityMenuAside }
        default:
            return state;
    }
}