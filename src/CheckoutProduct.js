import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import { MdDelete } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
import { useEffect } from "react";

function CheckoutProduct({ id, image, title, price, grams, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

useEffect(() => {
  // storing input name
  localStorage.setItem("basket", JSON.stringify(basket));
}, [basket]);
  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        grams: grams,
      },
    });
  };
  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct2">
        <img className="checkoutProduct__image" src={image} />

        <div className="checkoutProduct__info">
          <div className="checkoutProduct__title">{title}</div>
          <div className="checkoutProduct__title2">{grams}</div>

          {!hideButton && (
            <div className="remove_button" onClick={removeFromBasket}>
              <MdDelete />
              <div> Remove </div>
            </div>
          )}
          <div className="inner2" onClick={addToBasket}>
            <div className="btn">
              <button className="mainBtn" style={{ display: "flex" }}>
                <BsPlus />
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="checkoutProduct__price">₡{price}</div>
    </div>
  );
}

export default CheckoutProduct;
