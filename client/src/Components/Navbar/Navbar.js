import React from "react";
import { Header } from "semantic-ui-react";
import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
export default class NavBar extends React.Component {
  state = { activeItem: " " };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    return (
      <nav className={"fixed-navbar"}>
        <Navbar className={"navbark"} sticky="top" collapseOnSelect expand="lg">
          <Navbar.Brand>

              <Header className={"header-brand"}>
                StockExpress
              </Header>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" />
            <Nav>
              <Nav.Link href="/#/">Home</Nav.Link>
              <Nav.Link href="/#/product">Product</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    );
  }
}