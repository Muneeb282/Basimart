import React, { useState} from "react";
import { IoReorderThree, IoLocationSharp } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import "./Header.css";




import { useStateValue } from "./StateProvider.js";




const Nav = ({ props }) =>
{
  const [windowWidth] = useState(window.innerWidth);
 const [{ basket }] = useStateValue();

  return (
    <>
      {windowWidth > 950 ? (
        <>
          <div className="nav">
            <div className="nav_1">
              <div className="nav_logo">
                <IoReorderThree
                  fontSize={30}
                  style={{ marginRight: 30, marginLeft: 10 }}
                />
                <img src="asset/basi.jpg" alt="" width={140} height={60} />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#72767e",
                  cursor: "pointer"
                }}
              >
                <BiChevronLeft style={{ fontSize: 20 }} />
                <div style={{ fontWeight: 600 }}>
                  See <div> stores</div>
                </div>
              </div>
              <form className="nav_input_form">
                <input
                  className="nav_input"
                  type="search"
                  placeholder="Find all the super products"
                />
                <button className="nav_input_submit" type="submit">
                  <AiOutlineSearch />
                </button>
              </form>
              <div className="nav_location_icon">
                <IoLocationSharp />
              </div>
            </div>
            <div className="nav_2">
              <button className="nav_button">Get in</button>

              <button
                style={{
                  backgroundColor: basket.length === 0 ? "#f6f7f8" : "#90EE90"
                }}
               type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                // aria-controls="offcanvasRight"
                className="nav_cart_button"
              >
                {" "}
                <MdShoppingCart />
                <div style={{ fontSize: 17 }}>{basket?.length}</div>
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="nav2">
            <div className="nav_1">
              <IoReorderThree
                fontSize={30}
                style={{ marginRight: 30, marginLeft: 10 }}
              />
              <div className="andrea_img">
                <img src="asset/basilogo.png" width={50} alt="" />
              </div>
              <div className="nav_2">
              <button className="nav_button2">Get in</button>

              <button
                style={{
                  backgroundColor: basket.length === 0 ? "#f6f7f8" : "#90EE90"
                }}
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                className="nav_cart_button2"
              >
                {" "}
                <MdShoppingCart />
                <div style={{ fontSize: 17 }}>{basket?.length}</div>
              </button>
            </div>
            </div>
            <div className="nav_text">
              <div className="nav_text1">Delivery times</div>
              <div className="nav_text2">
                100% satisfication guarantee
                <BiChevronRight style={{ fontSize: 25,marginTop:3 }} />
              </div>
            </div>
            <div className="search_bar">
              <form className="nav_input_form" style={{ width: 300 }}>
                <input
                  className="nav_input"
                  type="search"
                  placeholder="Find all the super products"
                />
                <button className="nav_input_submit" type="submit">
                  <AiOutlineSearch />
                </button>
              </form>{" "}
              <div className="nav_location_icon">
                <IoLocationSharp /> <BiChevronRight style={{ fontSize: 20 }} />
              </div>
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
};

export default Nav;
