import React from "react"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { addToCart } from "../../actions"

const ProductListItem = (props) => {
  const { title, currency, thumbnail, prices } = props
  const dispatch = useDispatch()

  const thumbnailSrc = `${process.env.PUBLIC_URL}/assets/images${thumbnail}`
  const saleIcon = `${process.env.PUBLIC_URL}/assets/images/icons/sale.svg`

  return (
    <li className="productList__item">
      <div
        className="productList__item__thumbnail__box"
        style={{ backgroundImage: `url(${thumbnailSrc})` }}
      >
        <img
          className="productList__item__thumbnail"
          src={thumbnailSrc}
          alt={title}
        />
      </div>
      <button
        className="productList__item__btn"
        onClick={() => dispatch(addToCart())}
        type="button"
      >
        Add to cart
      </button>
      {prices.after_discount ? (
        <img
          src={saleIcon}
          alt="sale"
          className="productList__item__saleIcon"
        />
      ) : null}
      <h4 className="productList__item__title">{title}</h4>
      <p className="productList__item__price">
        <span
          className={`productList__item__price ${
            prices.after_discount ? "discount" : ""
          }`}
        >
          {currency}
          {prices.base}
        </span>
        {prices.after_discount ? (
          <span>
            {currency}
            {prices.after_discount}
          </span>
        ) : null}
      </p>
    </li>
  )
}

ProductListItem.propTypes = {
  title: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  prices: PropTypes.shape({
    base: PropTypes.number.isRequired,
    after_discount: PropTypes.number,
  }).isRequired,
}

export default ProductListItem
