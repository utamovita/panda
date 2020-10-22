import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { reqGetProductList } from "../../actions/productActions"

const Filters = () => {
  const [activeFilters, setActiveFilters] = useState([])
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()

  const onFilterChange = (color) => {
    let newFilters = activeFilters

    if (newFilters.includes(color)) {
      newFilters = newFilters.filter((filter) => filter !== color)
    } else {
      newFilters.push(color)
    }

    setActiveFilters(newFilters)

    dispatch(reqGetProductList(newFilters))
  }

  const filters = [
    {
      category: "Color",
      options: [
        { name: "blue", hexColor: "#32add6", attribute: "blue" },
        { name: "pastel yellow", hexColor: "#c9bd89", attribute: "yellow" },
        { name: "lime green", hexColor: "#a2ce79", attribute: "lime" },
        { name: "mint", hexColor: "#97bfb7", attribute: "mint" },
      ],
    },
  ]

  return (
    <div className={`filters ${open ? "open" : ""}`}>
      <div className="filters__head">
        <h3 className="filters__head__title">Filter by</h3>
        <button
          className="filters__head__toggle"
          onClick={() => setOpen(!open)}
          type="button"
        >
          {open ? "-" : "+"}
        </button>
      </div>
      <div className="filters__body">
        {filters.map((filter) => (
          <div className="filters__category" key={filter}>
            <h5 className="filters__category__title">{filter.category}</h5>
            {filter.options.map((option) => (
              <label className="filters__option" key={option.name}>
                <input
                  type="checkbox"
                  onChange={() => onFilterChange(option.attribute)}
                />
                <div
                  className="filters__option__type--color"
                  style={{ backgroundColor: option.hexColor }}
                />
                <span className="filters__option__name">{option.name}</span>
              </label>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Filters
