import types from "../actions/types"

const initialState = []

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCT_LIST:
      if (action.filters.length > 0) {
        const filteredProducts = action.products.filter((person) => {
          if (action.filters.includes(person.attributes.colors)) return person
          return null
        })
        return filteredProducts
      }
      return action.products

    default:
      return state
  }
}

export default productsReducer
