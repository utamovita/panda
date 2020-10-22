import React from "react"
import { useSelector } from "react-redux"

const minicartIcon = `${process.env.PUBLIC_URL}/assets/images/icons/shopping-cart.svg`

const Minicart = () => {
  const productCount = useSelector((state) => state.minicartReducer)

  return (
    <div className="minicart">
      <img src={minicartIcon} alt="minicart icon" className="minicart__icon" />
      {productCount > 0 ? (
        <div className="minicart__counter">{productCount}</div>
      ) : null}
    </div>
  )
}

export default Minicart
