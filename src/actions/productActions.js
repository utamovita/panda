import axios from "axios"
import { updateProductList } from "."

export const reqGetProductList = (filters) => (dispatch) => {
  return axios
    .get("http://localhost:3000/api/products")
    .then((res) => {
      dispatch(updateProductList(res.data, filters))
    })
    .catch((err) => {
      console.log(err)
    })
}
