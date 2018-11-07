// 定义常量

const ADD_GUN = 'add'
const DEL_GUN = 'del'

// reducer
export function counter(state = 0, action) {
    switch (action.type) {
        case ADD_GUN:
            return state + 1
        case DEL_GUN:
            return state - 1
        default:
            return 10
    }
}

// action creator
export function add() {
    return { type: ADD_GUN }
}

export function del() {
    return { type: DEL_GUN }
}
// async funcs
export function addAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(add())
        }, 2000)
    }
}















