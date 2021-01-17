import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import { addProductAction } from "../redux/actions";
import { connect } from "react-redux";

class AddModal extends Component {
  state = {
    nama: "",
    harga: 0,
    caption: '',
    stock: 0, 
    isAvailable: 1
  };
  onChangeInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const { isOpen, toggle, addProductAction } = this.props;
    const data = this.state;
    return (
      <div>
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add product ?</ModalHeader>
          <ModalBody>
            <p>Product Name</p>
            <Input
              value={this.state.nama}
              id="nama"
              onChange={this.onChangeInput}
            />
            <p>Price</p>
            <Input
              value={this.state.harga}
              id="harga"
              type="number"
              onChange={this.onChangeInput}
            />
            <p>Caption</p>
            <Input
              value={this.state.caption}
              id="caption"
              onChange={this.onChangeInput}
            />
            <p>Stock</p>
            <Input
              value={this.state.stock}
              id="stock"
              type="number"
              onChange={this.onChangeInput}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={() => addProductAction(data)}>
              Add Product
            </Button>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default connect(null, {
  addProductAction,
})(AddModal);
