import React from 'react'
// import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import './style.css'
// import { useState, useEffect } from "react";
// import axios from "axios";

const ProductAdmin = () => {
  return (
    <div className="container_product">
    <NavbarAdmin />
     <Table striped bordered hover>
      <thead>
        <tr className='table_head'>
          <th>ProductID</th>
          <th>ProductName</th>
          <th>Product Code</th>
          <th>Price</th>
          <th>Banner</th>
          <th>Quantity</th>
          <th>Create Date</th>
          <th>Start Date</th>
          <th>Status Date</th>
          <th>Update</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>
          <i className="action_edit ri-edit-2-line"></i>
          <i className="ri-delete-bin-5-line"></i>
          </td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default ProductAdmin

