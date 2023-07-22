import React from "react";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import axios from "axios";
// import DropdownTreeSelect from "react-dropdown-tree-select";
import "react-dropdown-tree-select/dist/styles.css";
import DropdownHOC from "./DropdownHOC";

const EditProduct = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [categorysTreeData, setCategorysTreeData] = useState([]);

  const handleImageChange = (e) => {
    if (e.target.files.length) {
      const src = URL.createObjectURL(e.target.files[0]);
      setImageUrl(src);
    }
  };

  const transformToTreeData = (categories) => {
    return categories.map((category) => ({
      label: category.categoryName,
      value: category.id.toString(),
      ...(category.children && {
        children: transformToTreeData(category.children),
      }),
    }));
  };

  useEffect(() => {
    axios
      .get("http://26.30.1.50:8080/api/v1.0/Categories")
      .then((response) => {
        // Chuyển đổi dữ liệu phản hồi thành định dạng cây
        const treeData = transformToTreeData(response.data);
        setCategorysTreeData(treeData);
      })
      .catch((error) => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCategorySelect = (selectedData) => {
    // Trong đây, bạn có thể xử lý dữ liệu đã chọn từ cây chọn
    console.log("Dữ liệu đã chọn:", selectedData);
  };

  return (
    <>
      <h3 className="edit_title">Edit Product</h3>
      <div className="edit_product">
        <div className="edit_input">
          <Form.Label htmlFor="name">Product Name</Form.Label>
          <Form.Control
            type="text"
            id="name"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Label htmlFor="code">Product Code</Form.Label>
          <Form.Control
            type="text"
            id="code"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Label htmlFor="price">Price</Form.Label>
          <Form.Control
            type="number"
            id="price"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Label htmlFor="banner">Banner</Form.Label>
          <Form.Control
            type="text"
            id="banner"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Label htmlFor="quantity">Quantity</Form.Label>
          <Form.Control
            type="number"
            id="quantity"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Label htmlFor="sale">Voucher</Form.Label>
          <Form.Control
            type="text"
            id="sale"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          {categorysTreeData.length > 0 ? (
            <DropdownHOC
              onSelect={handleCategorySelect}
              data={categorysTreeData}
            />
          ) : (
            <p>Loading categories...</p>
          )}
          <Form.Label htmlFor="createDate">Create Date</Form.Label>
          <Form.Control
            type="date"
            id="createDate"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Label htmlFor="startDate">Start Date</Form.Label>
          <Form.Control
            type="date"
            id="startDate"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Label htmlFor="statusDate">Status Date</Form.Label>
          <Form.Control
            type="number"
            id="statusDate"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Label htmlFor="update">Update</Form.Label>
          <Form.Control
            type="number"
            id="update"
            aria-describedby="passwordHelpBlock"
          />
        </div>
        <div class="image-upload">
          <label for="file-input">
            <img src={imageUrl} alt="Thêm ảnh" />
          </label>
          <input id="file-input" type="file" onChange={handleImageChange} />
        </div>
      </div>
    </>
  );
};

export default EditProduct;
