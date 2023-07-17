import React from "react";
import Form from "react-bootstrap/Form";
import './style.css'

const AddCategory = () => {
  return (
    <div className="addcate" >
      <Form.Label htmlFor="catename">Category Name</Form.Label>
      <Form.Control
        type="text"
        id="catename"
        aria-describedby="passwordHelpBlock"
      />
    </div>
  );
};

export default AddCategory;
