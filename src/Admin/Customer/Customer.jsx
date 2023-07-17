import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
const Customer = () => {
  return (
    <div className="container_product">
      <NavbarAdmin />
      <Table striped bordered hover>
        <thead>
          <tr className="table_head">
            <th>ID</th>
            <th>Email</th>
            <th>Arrived</th>
            <th>Phone</th>
            <th>List Product</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>123456789</td>
            <td>
              <Button variant="danger">
                {/* <Link to={`/productdetail/${shopItems.id}`}>Detail</Link> */}
                <Link to={`/customerdetail/1`}>Detail</Link>
              </Button>{" "}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Customer;
