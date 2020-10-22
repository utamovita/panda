import types from "../actions/types"

const initialState = 0

const minicartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return state + 1

    default:
      return state
  }
}

export default minicartReducer
