import React from "react";
import ProductCart from "./ProductCart";
import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';


// const categorys = [
//   {
//     id: 1,
//     category: "Đèn Chùm",
//     children: [
//       {
//         id: 2,
//         category: "Đèn chùm hiện đại",
//       },
//       {
//         id: 2,
//         category: "Đèn chùm Cổ Điển",
//       },
//       {
//         id: 2,
//         category: "Đèn chùm hiện đại",
//       },
//       {
//         id: 2,
//         category: "Đèn chùm hiện đại",
//       },
//       {
//         id: 2,
//         category: "Đèn chùm hiện đại",
//       },
//       {
//         id: 3,
//         category: "Đèn Mâm Ốp Trần",
//       },
//     ],
//   },
//   {
//     id: 2,
//     category: "Đèn Thả",
//     children: [
//       {
//         id: 2,
//         category: "Đèn chùm hiện đại",
//       },
//     ],
//   },
//   {
//     id: 3,
//     category: "Đèn Mâm Ốp Trần",
//     children: [
//       {
//         id: 2,
//         category: "Đèn chùm hiện đại",
//       },
//     ],
//   },
//   {
//     id: 4,
//     category: "Đèn Gương",
//     children: [
//       {
//         id: 2,
//         category: "Đèn chùm hiện đại",
//       },
//     ],
//   },
//   {
//     id: 5,
//     category: "Đèn Bàn - Đèn Cây",
//     children: [
//       {
//         id: 2,
//         category: "Đèn chùm hiện đại",
//       },
//     ],
//   },
//   {
//     id: 6,
//     category: "Đèn Tường",
//     children: [
//       {
//         id: 2,
//         category: "Đèn chùm hiện đại",
//       },
//     ],
//   },
//   {
//     id: 7,
//     category: "Quạt Trần",
//     children: [
//       {
//         id: 2,
//         category: "Đèn chùm hiện đại",
//       },
//     ],
//   },
//   {
//     id: 8,
//     category: "Đèn Led",
//     children: [
//       {
//         id: 2,
//         category: "Đèn chùm hiện đại",
//       },
//     ],
//   },
//   {
//     id: 9,
//     category: "Đèn Ngoài Trời",
//     children: [
//       {
//         id: 2,
//         category: "Đèn chùm hiện đại",
//       },
//     ],
//   },
// ];

// const data = [
//   {
//     id: 7,
//     cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
//     name: "Mapple Earphones",
//     price: "400",
//     discount: "25",
//     categoryname: "Đèn Chùm",
//   },
//   {
//     id: 8,
//     cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
//     name: "Vivo android one",
//     price: "120",
//     discount: "10",
//     categoryname: "Đèn Chùm",
//   },
//   {
//     id: 9,
//     cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
//     name: "Vivo android one",
//     price: "120",
//     discount: "10",
//     categoryname: "Đèn Chùm",
//   },
//   {
//     id: 10,
//     cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
//     name: "Vivo android one",
//     price: "120",
//     discount: "10",
//     categoryname: "Đèn Chùm",
//   },
//   {
//     id: 11,
//     cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
//     name: "Sony Light",
//     price: "20",
//     discount: "50 ",
//     categoryname: "Đèn Thả",
//   },
//   {
//     id: 12,
//     cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
//     name: "Iphone",
//     price: "999",
//     discount: "10 ",
//     categoryname: "Đèn Thả",
//   },
//   {
//     id: 13,
//     cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
//     name: "Iphone",
//     price: "999",
//     discount: "10 ",
//     categoryname: "Đèn Thả",
//   },
//   {
//     id: 14,
//     cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
//     name: "Iphone",
//     price: "999",
//     discount: "10 ",
//     categoryname: "Đèn Thả",
//   },
//   {
//     id: 15,
//     cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
//     name: "Iphone",
//     price: "999",
//     discount: "10 ",
//     categoryname: "Đèn Mâm Ốp Trần",
//   },
//   {
//     id: 16,
//     cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
//     name: "Iphone",
//     price: "999",
//     discount: "10 ",
//     categoryname: "Đèn Mâm Ốp Trần",
//   },
//   {
//     id: 17,
//     cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
//     name: "Iphone",
//     price: "999",
//     discount: "10 ",
//     categoryname: "Đèn Mâm Ốp Trần",
//   },
//   {
//     id: 18,
//     cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
//     name: "bebjhf",
//     price: "999",
//     discount: "10 ",
//     categoryname: "Đèn Mâm Ốp Trần",
//   },
//   {
//     id: 18,
//     cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
//     name: "Iphone",
//     price: "999",
//     discount: "10 ",
//     categoryname: "Đèn Gương",
//   },
//   {
//     id: 19,
//     cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
//     name: "Iphone",
//     price: "999",
//     discount: "10 ",
//     categoryname: "Đèn Gương",
//   },
//   {
//     id: 20,
//     cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
//     name: "Iphone",
//     price: "999",
//     discount: "10 ",
//     categoryname: "Đèn Gương",
//   },
//   {
//     id: 21,
//     cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
//     name: "Iphone",
//     price: "999",
//     discount: "10 ",
//     categoryname: "Đèn Gương",
//   },
//   {
//     id: 22,
//     cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
//     name: "Iphone",
//     price: "999",
//     discount: "10 ",
//     categoryname: "Đèn Bàn - Đèn Cây",
//   },
//   {
//     id: 23,
//     cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
//     name: "Iphone",
//     price: "999",
//     discount: "10 ",
//     categoryname: "Đèn Bàn - Đèn Cây",
//   },
//   {
//     id: 24,
//     cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
//     name: "Iphone",
//     price: "999",
//     discount: "10 ",
//     categoryname: "Đèn Bàn - Đèn Cây",
//   },
//   {
//     id: 25,
//     cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
//     name: "Iphone",
//     price: "999",
//     discount: "10 ",
//     categoryname: "Đèn Bàn - Đèn Cây",
//   },
//   {
//     id: 26,
//     cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
//     name: "Iphone",
//     price: "999",
//     discount: "10 ",
//     categoryname: "Đèn Tường",
//   },
//   {
//     id: 27,
//     cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
//     name: "Iphone",
//     price: "999",
//     discount: "10 ",
//     categoryname: "Quạt Trần",
//   },
//   {
//     id: 28,
//     cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
//     name: "Iphone",
//     price: "999",
//     discount: "10 ",
//     categoryname: "Đèn Led",
//   },
//   {
//     id: 29,
//     cover: "https://homelight.vn/img/p/den-tha-hien-dai-lady116-p4541.jpg",
//     name: "Iphone",
//     price: "999",
//     discount: "10 ",
//     categoryname: "Đèn Ngoài Trời",
//   },
// ];

const Product = ({ addToCart, shopItems }) => {
  const [products, setProducts] = useState([]);
  const location = useLocation();


  useEffect(() => {
    axios
      .get("http://26.30.1.50:8080/api/v1.0/ProductByCategory/" + window.location.pathname.substring(12))
      .then((response) => {
        setProducts(response.data);
        console.log(response.data)
      })
      .catch((error) => {});
  },[location]);
  return (
    <section className="shop background product_items">
      <div className="container d_flex product product_container">
        <div className="content-items">
          {products.map((product) => (
            <div className="product-content  grid1">
              <ProductCart addToCart={addToCart} shopItems={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
