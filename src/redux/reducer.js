import action_type from "./actionTypes.js"

const defaultState = {
    user_name : "none",
    user_passwd : "none",
    authed : false,
    num : 0
}

const deep_copy = (value) => {
    return JSON.parse(JSON.stringify(value))
}


export default (state = defaultState, action) => {
    if (action.type === action_type.login) {
        let newState = deep_copy(state)
        newState.user_name = action.user_name
        newState.user_passwd = action.user_passwd
        newState.authed = action.authed
        return newState
    }
    if (action.type === action_type.add) {
        let newState = deep_copy(state)
        newState.num += action.num
        return newState
    }

    return state
}