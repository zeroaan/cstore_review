import * as types from "./types"

export const login = (data) => {
  return {
    type: types.LOGIN,
    data,
  }
}
export const logout = () => {
  return {
    type: types.LOGOUT,
  }
}
