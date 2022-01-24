export const INCR = {type: 'INCREMENT'}
export const DECR = {type: 'DECREMENT'}
export const WHATEVER = {type: 'WHATEVER'}
export const THEME = {type: 'THEME'}
export const ASYNC_INCR = (dispatch) => setTimeout(()=>dispatch(INCREMENT), 1500)
