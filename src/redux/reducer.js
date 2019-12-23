import action_type from "./actionTypes.js"

const defaultState = {
    user_name : "none",
    user_passwd : "none",
    authed : false,
    collapsed: false,
    enterNewItem: {
        visible: false,
        factorName: "none",
        totalAmount: 0
    },
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
    if (action.type === action_type.set_collapsed) {
        let newState = deep_copy(state)
        newState.collapsed = action.value
        return newState
    }
    if (action.type === action_type.updateNewItemVisible) {

        let newState = deep_copy(state)
        newState.enterNewItem.visible = !newState.enterNewItem.visible
        return newState
    }

    return state
}