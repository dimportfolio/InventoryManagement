import React, { Component } from "react";
import {
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  Input, 
  Label, 
  Form, 
  FormGroup
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../../actions/inventoryActions";
import PropTypes from "prop-types";

class ItemModal extends Component {
  state = {
    modal: false,
    vendor: "",
    date: "",
    po: "",
    material: "",
    quantity: "",
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      vendor: this.state.vendor,
      date: this.state.date,
      po: this.state.po,
      material: this.state.material,
      quantity: this.state.quantity,
    }

    this.props.addItem(newItem);

    this.toggle();
  }

  render() {
    return(
      <div>
        { this.props.isAuthenticated ? <Button
          color="dark"
          style={{marginBottom: "2rem"}}
          onClick={this.toggle}
        >Add Item
        </Button> : <h4> Please log in to use this system</h4>}
        
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>
            Add To Inventory
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="vendor">Vendor</Label>
                <Input 
                  type="text"
                  name="vendor"
                  id="item"
                  placeholder="add something"
                  onChange={this.onChange}
                />
                <Label for="date">Date</Label>
                <Input 
                  type="text"
                  name="date"
                  id="item"
                  placeholder="add something"
                  onChange={this.onChange}
                />
                <Label for="po">PO#</Label>
                <Input 
                  type="text"
                  name="po"
                  id="item"
                  placeholder="add something"
                  onChange={this.onChange}
                />
                <Label for="material">Material</Label>
                <Input 
                  type="text"
                  name="material"
                  id="item"
                  placeholder="add something"
                  onChange={this.onChange}
                />
                <Label for="quantity">Quantity</Label>
                <Input 
                  type="text"
                  name="quantity"
                  id="item"
                  placeholder="add something"
                  onChange={this.onChange}
                />
                <Button
                  color="dark"
                  style={{marginTop: "2rem"}}
                  block
                >
                  Submit
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
          
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addItem })(ItemModal);