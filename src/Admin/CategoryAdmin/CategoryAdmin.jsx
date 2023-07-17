import React from 'react'
import Table from 'react-bootstrap/Table';
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import './style.css'
const CategoryAdmin = () => {
  return (
    <div className="container_product">
    <NavbarAdmin />
     <Table striped bordered hover>
      <thead>
        <tr className='table_head'>
          <th>ID</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td >
          <i className="action_category ri-edit-2-line"></i>
          <i className="ri-delete-bin-5-line"></i>
          </td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default CategoryAdmin
