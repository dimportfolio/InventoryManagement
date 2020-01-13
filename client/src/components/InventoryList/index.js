import React, { Component } from "react";
import { Container, Table, Button } from "reactstrap";
import { connect } from "react-redux";
import { getItems, deleteItem, increaseItem, decreaseItem } from "../../actions/inventoryActions";
import PropTypes from "prop-types";

class InventoryList extends Component {


  static propTypes = {
    isAuthenticated: PropTypes.bool
  }

  componentDidMount() {
    this.props.getItems();
  }
  
  onDeleteClick = id => {
    this.props.deleteItem(id);
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  }

  render() {
    const { items } = this.props.item;
    return (
      <div>{ this.props.isAuthenticated ? <Container>
        <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>vendor</th>
              <th>date</th>
              <th>PO#</th>
              <th>Material</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {items.map((items)=>{
              return(
              <tr key={items._id}>
              <th scope="row">{items._id}</th>
              <th>{items.vendor}</th>
              <th>{items.date}</th>
              <th>{items.po}</th>
              <th>{items.material}</th>
              <th>{items.quantity}</th>
              <Button
              className="remove-btn"
              color="danger"
              onClick={this.onDeleteClick.bind(this, items._id)}></Button>
              <input type="text"></input>
              <Button
              className="add-btn"
              color="primary"
              onClick=""></Button>
              <Button
              className="subtract-btn"
              color="secondary"
              onClick=""></Button>
            </tr>
              )
            })}
           
          </tbody>
        </Table>
          </Container> : <p></p> }
          </div>
      
      
    )
  }
}

InventoryList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
})
export default connect(
  mapStateToProps, 
  { getItems, deleteItem, increaseItem, decreaseItem }
)(InventoryList);