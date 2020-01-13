import React, { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import RegisterModal from "../RegisterModal"
import Logout from "../Logout"
import LoginModal from "../LoginModal"
import { connect } from "react-redux";
import PropTypes from "prop-types"

class AppNavbar extends Component {
  state = {
    isOpen: false
  }

  static propTypes = {
    auth: PropTypes.object.isRequired
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {

    const { isAuthenticated, user } = this.props.auth

    const authLinks = (
      <Fragment>
         <NavItem>
          <span classNAme="navbar-text mr-3">
            <strong>{ user ? `Welcome ${user.name}` : ""}</strong>
          </span>
        </NavItem>
         <NavItem>
          <Logout />
        </NavItem>
      </Fragment>
    )

    const guestLinks = (
      <Fragment>
        <NavItem>
          <RegisterModal />
        </NavItem>
        <NavItem>
          <LoginModal />
        </NavItem>
      </Fragment>
    )

    return(
      <div>
        <Navbar color="dark" dark expand="md" className="mb-5">
          <Container>
            <NavbarBrand href="/">IMS</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {isAuthenticated ? authLinks : guestLinks}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(AppNavbar);