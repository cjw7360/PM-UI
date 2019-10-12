import action_type from "./actionTypes.js"

const defaultState = {
    user_name : "",
    user_passwd : "",
    login : false
}


export default (state = defaultState, action) => {
    if (action.type === action_type.set_user_name) {
        console.log("set_user_name")
    }

    return state
}