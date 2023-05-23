import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";



function Product({ id, title, image, price, grams }) {
  const [{ basket }, dispatch] = useStateValue();

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
    <div
      className="MuiGrid-root MuiGrid-container css-1d3bbye"
      style={{ display: "flex",marginLeft:10,marginRight:20,height:260,overflow:"hidden" }}
    >
      <div
        className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4.5 MuiGrid-grid-md-2 css-yd0inb"
        style={{  height: "300px", }}
      >
        <div >
          <div>
            <div id="outer">
              <div className="inner" onClick={addToBasket}>
                <div class="btn">
                  <button class="mainBtn">+ ADD</button>
                </div>
              </div>
            </div>
            <img
              src={image}
              alt="addToCard"
              style={{
                width: "160px",
                height: "150px",
                borderRadius: "10px",
                cursor: "pointer",
                marginTop: "0px"
              }}
            />
          </div>
          <div
            style={{
              fontWeight: "700",
              color: "rgb(52, 53, 56)",
              fontSize: "18px"
            }}
          >
            ₡ {price}
          </div>
          <div
            style={{
              width: "190px",
              fontSize: "13px",
              color: "rgb(52, 53, 56)"
            }}
          >
            {title}
          </div>
          <div
            style={{
              width: "190px",
              fontSize: "11px",
              color: "rgb(96, 97, 99)"
            }}
          >
            {grams}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
