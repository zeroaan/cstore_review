import { createContext } from "react"

const data = {
  foods: null,
  users: null,
}

export const DataContext = createContext(data)
