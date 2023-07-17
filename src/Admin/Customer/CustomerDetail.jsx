import React from 'react'
import Table from "react-bootstrap/Table";

const CustomerDetail = () => {
  return (
    <Table style={{marginBottom: '20px' }} striped bordered hover>
        <thead>
          <tr className="table_head" >
            <th>ProductID</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
          </tr>
        </tbody>
      </Table>
  )
}

export default CustomerDetail
