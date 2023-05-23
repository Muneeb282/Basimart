import React from "react";
import {IoMdClose} from "react-icons/io"

import "./Header.css"
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { useEffect } from "react";

const Sidebar = ({props}) => {
  const [{ basket }] = useStateValue();
 
const totalPrice = basket.reduce((acc, item) => acc + item.price, 0);
  return (
    <>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        style={{ width: 500 }}
        aria-labelledby="offcanvasRightLabel"
      >
        {basket.length === 0 ? (
          <>
            <div className="sidebar_header">
              <IoMdClose data-bs-dismiss="offcanvas" />
              <p>You are buying in +</p>
            </div>
            <div className="sidebar_main">
              <img src="asset/download.png" alt="" />
              <div className="sidebar_main_text">
                Your personal cart is empty
                <div className="sidebar_main_text2" data-bs-dismiss="offcanvas">
                  Buy now
                </div>
              </div>
            </div>
            <div className="sidebar_footer">
              <div className="footer_text">Checkout</div>
              <div className="footer_total_cost">₡0.00</div>
            </div>
          </>
        ) : (
          <>
            <div className="sidebar_header2">
              <IoMdClose data-bs-dismiss="offcanvas" />
              <div>

                <div>Personal Andrea Cart</div>
              <p>You are buying in +</p>
              </div>
            </div>
            <div className="sidebar_main2">
              <div className="andrea">
                <div className="andrea1">
                  <div className="andrea_img">
                    <img src="asset/basilogo.png" width={50} alt="" />
                  </div>
                  <div className="andrea_text">
                      <div className="andrea_text1">
                        Andrea</div>
                      <div className="andrea_text2">100% satisfaction guarantee</div>
                  </div>
                  
                </div><div className="footer_total_cost2">
                    ₡{basket?.length ? `${totalPrice.toFixed(2)}` : "N/A"}
                  </div>
              </div>
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  grams={item.grams}
                />
              ))}
            </div>
            <div className="sidebar_footer">
              <div className="footer_text">Checkout</div>
              <div className="footer_total_cost">
                ₡{basket?.length ? `${totalPrice.toFixed(0)}` : "N/A"}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Sidebar;
