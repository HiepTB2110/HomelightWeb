import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useEffect } from "react";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};
const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://26.30.1.50:8080/api/v1.0/Products")
      .then((response) => {
        // Lưu dữ liệu trả về vào state
        setProducts(response.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      <Slider {...settings}>
        {products.map((productItems) => {
          return (
            <div className="box">
              <div className="product mtop">
                <div className="img">
                  <span className='discount'>10% Off</span>
                  <img
                    className="discount_img"
                    src={productItems.image}
                    alt=""
                  />
                  <div className="product-like">
                    <label>{count}</label> <br />
                    <i className="fa-regular fa-heart" onClick={increment}></i>
                  </div>
                </div>
                <div className="product-details">
                  <h3 className="product-name">{productItems.productName}</h3>
                  <div className="price">
                    <h4>Giá KM: {productItems.originPrice} đ </h4>
                    <button onClick={() => addToCart(productItems)}>
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default FlashCard;
