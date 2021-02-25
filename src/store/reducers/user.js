import * as types from "../actions/types"

const initialState = {
  user: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_USER: {
      return { ...state, user: action.data }
    }
    case types.LOGOUT: {
      return { ...state, user: null }
    }
    default:
      return state
  }
}

export default userReducer
