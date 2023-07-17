import React from "react";
import "./styleCart.css";

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  const data = [
    {
      id: 7,
      cover: "./images/shops/shops-1.png",
      name: "Mapple Earphones",
      price: "400",
      discount: "25",
      categoryname: "Đèn Chùm",
    },
  ];

  // prodcut qty total
  return (
    <>
      <section>
        <div className="container d_flex">
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className="cart-details">
            {data.map((item) => {
              return (
                <div className="d_flex product_" key={item.id}>
                  <div className="cart-items-function">
                    <div className="cartControl d_flex cartControl_">
                      <button
                        className="incCart"
                        onClick={() => addToCart(item)}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      {CartItem.map((item) => {
                        return <h2>{item.qty > 0 ? item.qty : '0'}</h2>;
                      })}
                      <button
                        className="desCart"
                        onClick={() => decreaseQty(item)}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-price"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
