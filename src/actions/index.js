import types from "./types"

export const updateProductList = (products, filters) => ({
  type: types.GET_PRODUCT_LIST,
  products,
  filters,
})

export const addToCart = () => ({
  type: types.ADD_TO_CART,
})
