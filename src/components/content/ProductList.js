import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { reqGetProductList } from "../../actions/productActions"
import Filters from "./Filters"
import ProductListItem from "./ProductListItem"

const ProductList = () => {
  const productList = useSelector((state) => state.productListReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(reqGetProductList([]))
  }, [dispatch])

  return (
    <div className="productList__container">
      <Filters />
      <ul className="productList">
        {productList.map((p) => (
          <ProductListItem
            key={p.id}
            title={p.title}
            currency={p.currency}
            thumbnail={p.images.thumbnail}
            prices={p.prices}
            attributes={p.attributes}
          />
        ))}
      </ul>
    </div>
  )
}

export default ProductList
