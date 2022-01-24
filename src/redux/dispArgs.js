export const INCREMENT = {type: 'INCREMENT'}
export const DECREMENT = {type: 'DECREMENT'}
export const WHATEVER = {type: 'WHATEVER'}
export const THEME = {type: 'THEME'}
export const ASYNC_INC = (dispatch) => setTimeout(()=>dispatch(INCREMENT), 1500)
