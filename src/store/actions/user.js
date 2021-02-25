import * as types from "./types"

export const updateUser = (data) => {
  return {
    type: types.UPDATE_USER,
    data,
  }
}
export const logout = () => {
  return {
    type: types.LOGOUT,
  }
}
