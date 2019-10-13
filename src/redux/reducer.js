import action_type from "./actionTypes.js"

const defaultState = {
    user_name : "none",
    user_passwd : "none",
    authed : false
}


export default (state = defaultState, action) => {
    if (action.type === action_type.set_user_name) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.user_name = action.user_name
        newState.user_passwd = action.user_passwd
        newState.authed = action.authed
        return newState
    }

    return state
}