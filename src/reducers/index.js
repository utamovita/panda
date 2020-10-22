import { combineReducers } from "redux"
import minicartReducer from "./minicartReducer"
import productListReducer from "./productListReducer"

const allReducers = combineReducers({
  minicartReducer,
  productListReducer,
})

export default allReducers
