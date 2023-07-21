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

  toggleParents = (data, value, checked) => {
    // Tìm nút con có giá trị tương ứng
    const node = data.find((item) => item.value === value);

    // Nếu không tìm thấy hoặc không có nút cha, dừng hàm
    if (!node || !node.parent) return;

    // Kiểm tra xem tất cả các nút con của nút cha có được tích hay không
    const siblingsChecked = node.parent.children.every(
      (child) => child.checked === true
    );

    // Cập nhật trạng thái của nút cha
    node.parent.checked = siblingsChecked;

    // Tiếp tục kiểm tra các nút cha lên trên cây
    this.toggleParents(data, node.parent.value, checked);
  };

  handleChange = ({ value, checked }) => {
    if (value === "selectAll") {
      this.toggleAll(checked);
    } else {
      const { data } = this.state;

      // Cập nhật trạng thái của nút hiện tại
      const node = data.find((item) => item.value === value);
      node.checked = checked;

      // Cập nhật trạng thái của nút cha nếu có
      if (node.parent) {
        this.toggleParents(data, node.parent.value, checked);
      }

      this.setState({ data });
    }
  };

  render() {
    return (
      <div>
        <DropdownTreeSelect data={this.state.data} onChange={this.handleChange} mode="hierarchical"/>
      </div>
    );
  }
}
