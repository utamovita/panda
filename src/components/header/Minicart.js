import React from "react";

const minicartIcon = process.env.PUBLIC_URL + "/assets/images/icons/shopping-cart.svg";

const Minicart = () => {
  return (
    <>
      <div className="minicart">
        <img
          src={minicartIcon}
          alt="minicart icon"
          className="minicart__icon"
        />
        <div className="minicart__counter">1</div>
      </div>
    </>
  );
};

export default Minicart;
