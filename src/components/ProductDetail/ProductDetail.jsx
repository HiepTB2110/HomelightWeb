import React from "react";
import { Container } from "reactstrap";
import "./style.css";
import Cart from "./Cart";

const ProductDetail = ({ CartItem, addToCart, decreaseQty }) => {
  return (
    <section>
      <Container>
        <div className="row1">
          {/* <Col lg="8"> */}
          <div className="tour__content">
            <img
              src="https://homelight.vn/img/p/den-tha-pha-le-lady045-p4522.jpg"
              alt=""
            />

            <div className="tour__info">
              <h2>Name</h2>
              <ul className="tour__extra-details">
                <li>
                  <i class="ri-creative-commons-nd-line"></i>Mã sản phẩm
                </li>
                <li>
                  {" "}
                  <i class="ri-creative-commons-nd-line"></i>Banner
                </li>
                <li>
                  {" "}
                  <i class="ri-creative-commons-nd-line"></i>Quantity
                </li>
                {/* <li> <i class="ri-creative-commons-nd-line"></i>Price</li> */}
                <li>
                  {" "}
                  <i class="ri-creative-commons-nd-line"></i>CreatDate
                </li>
                <li>
                  <i class="ri-creative-commons-nd-line"></i>StartDate
                </li>
                <li>
                  <i class="ri-creative-commons-nd-line"></i>StatusDate
                </li>
                {/* <li><i class="ri-creative-commons-nd-line"></i>Update</li> */}
                <div class="clear"></div>
              </ul>

              <div className="bought">
                <h4>Giá KM: 200.000 đ</h4>
                <Cart
                  CartItem={CartItem}
                  addToCart={addToCart}
                  decreaseQty={decreaseQty}
                />
              </div>

              <div className="desc">
                <h5>Description</h5>
                <p>desc</p>
              </div>
            </div>
          </div>
          {/* </Col> */}
        </div>
      </Container>
    </section>
  );
};

export default ProductDetail;
