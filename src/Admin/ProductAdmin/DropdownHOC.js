import React, { Component } from "react";
import DropdownTreeSelect from "react-dropdown-tree-select";

export default class HOC extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this.prepareData(props.data) };
  }

  prepareData = (data) => {
    // optional: you can skip cloning if you don't mind mutating original data
    var cloned = data.slice(0);

    // insert special select all node
    cloned.splice(0, 0, {
      label: "Select All",
      value: "selectAll",
      className: "select-all",
    });

    return cloned;
  };

  toggleAll = (checked) => {
    const { data } = this.state;
    for (var i = 1; i < data.length; i++) {
      data[i].checked = checked;
    }
    this.setState({ data });
  };

  // toggleParents = (data, value, checked) => {
  //   alert("d");
  //   // Tìm nút con có giá trị tương ứng
  //   // eslint-disable-next-line array-callback-return
  //   const node = data.find((item) => {
  //     console.log(item);
  //   });
  //   alert("hii");
  //   // const nodes = data.find((item) => console.log(item));

  //   // Nếu không tìm thấy hoặc không có nút cha, dừng hàm
  //   if (!node || !node.parent) return;

  //   // Kiểm tra xem tất cả các nút con của nút cha có được tích hay không
  //   const siblingsChecked = node.parent.children.every(
  //     (child) => child.checked === true
  //   );

  //   // Cập nhật trạng thái của nút cha
  //   node.parent.checked = siblingsChecked;

  //   // Tiếp tục kiểm tra các nút cha lên trên cây
  //   this.toggleParents(data, node.parent.value, checked);
  // };

  toggleParents = (data, value, checked) => {
    // Find the node with the given value
    function findNodesWithValue(node, value, ancestors = []) {
      if (node.value === value) {
        console.log("Nút con:", node.value);
        console.log("Tất cả nút cha:", ancestors);
        return node.value;
      }

      ancestors.push(node.value);

      if (node.children && Array.isArray(node.children)) {
        // Duyệt qua từng nút con và gọi lại hàm findNodesWithValue đối với mỗi nút con
        node.children.forEach((child) => {
          findNodesWithValue(child, value, [...ancestors]);
        });
      }
    }
    const node = data.find((item) => findNodesWithValue(item, value));

    // If the node is not found or there is no parent, stop the function
    if (!node || !node.parent) return;

    // Update the checked state of the node
    node.checked = checked;

    // Check if all siblings of the current node are checked
    // const siblingsChecked = node.parent.children.every(
    //   (child) => child.checked === true
    // );

    // Update the parent's checked state
    alert("2");
    node.parent.checked = checked;

    // Continue to update the parent's ancestors
    this.toggleParents(data, node.parent.value, checked);
  };

  handleChange = ({ value, checked }) => {
    if (value === "selectAll") {
      this.toggleAll(checked);
    } else {
      const { data } = this.state;
      function findNodesWithValue(node, value, ancestors = []) {
        if (node.value === value) {
          console.log("Nút con:", node.value);
          console.log("Tất cả nút cha:", ancestors);
          return true; // Trả về true nếu tìm thấy nút có giá trị cần tìm
        }

        ancestors.push(node.value);

        if (node.children && Array.isArray(node.children)) {
          // Duyệt qua từng nút con và gọi lại hàm findNodesWithValue đối với mỗi nút con
          for (const child of node.children) {
            if (findNodesWithValue(child, value, [...ancestors])) {
              return true; // Nếu tìm thấy nút trong các nút con, trả về true
            }
          }
        }

        return false; // Trả về false nếu không tìm thấy nút có giá trị cần tìm trong các nút con
      }

      // Sử dụng hàm find để tìm nút có giá trị cần tìm (đây là đoạn mã bạn đã cung cấp)
      const node = data.find((item) => findNodesWithValue(item, value));
      console.log(node.value);
      // console.log(value)
      // Verify that the node exists before updating its 'checked' property

      if (node.value) {
        console.log(node);
        node.checked = checked;

        // Cập nhật trạng thái của nút cha nếu có
        alert("3");
        this.toggleParents(data, node.parent.value, checked);

        this.setState({ data });
        this.setState({ data }, () => {
          // Call the onSelect callback with the selected data
          if (this.props.onSelect) {
            const selectedData = this.getSelectedData(data);
            this.props.onSelect(selectedData);
          }
        });
      }
    }
  };

  getSelectedData = (data) => {
    let selectedData = [];
    data.forEach((node) => {
      if (node.checked) {
        selectedData.push(node);
      }
      if (node.children) {
        selectedData = selectedData.concat(this.getSelectedData(node.children));
      }
    });
    return selectedData;
  };

  render() {
    return (
      <div>
        <DropdownTreeSelect
          data={this.state.data}
          onChange={this.handleChange}
          mode="hierarchical"
        />
      </div>
    );
  }
}
