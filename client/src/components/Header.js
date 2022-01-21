import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logoutUser } from "../actions/userActions"
import { useDispatch, useSelector } from 'react-redux'



export default function Header() {

  const cartreducer = useSelector(state => state.cartReducer)
  const { cartItems } = cartreducer

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const dispatch = useDispatch()








  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect className="ml-auto">
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img src="data:image/jpeg;base64,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" width="180" height="150" className="d-inline-block align-top" alt="Plugged logo use http link if img fails" />

            </Navbar.Brand>
          </LinkContainer>
          <LinkContainer to='/homescreen'>
            <Navbar.Brand>PLUGGED</Navbar.Brand>

          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ml-auto">
              <LinkContainer to='/cart'>
                <Nav.Link><i className="fas fa-shopping-cart"></i> Cart {cartItems.length} </Nav.Link>
              </LinkContainer>




              {currentUser ? (
                <NavDropdown title={currentUser.name} id='currentUser'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={() => { dispatch(logoutUser()) }}>Logout</NavDropdown.Item>

                </NavDropdown>
              ) : (
                <LinkContainer to='/'>
                  <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                </LinkContainer>
              )}

              {currentUser && currentUser.isAdmin ? (
                <NavDropdown title={currentUser.name} id='currentUser.isAdmin '>
                  <LinkContainer to='/admin'>
                    <NavDropdown.Item>Admin</NavDropdown.Item>
                  </LinkContainer>

                </NavDropdown>
              ) : (
                <LinkContainer to='/'>
                  <Nav.Link><i className="fas fa-user"></i></Nav.Link>
                </LinkContainer>
              )}



            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

/**<header>
            <Navbar bg="light" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Plugged</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <SearchBox />
                        <Nav className="ml-auto">
                            <LinkContainer to='/cart'>
                                <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                            </LinkContainer>

                            {currentUser ? (
                                <NavDropdown title={currentUser.name} id='currentUser'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                </NavDropdown>
                            ) : (
                                    <LinkContainer to='/login'>
                                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                                    </LinkContainer>
                                )}


                      {currentUser && currentUser.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenue'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>

                                </NavDropdown>
                            )}









                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>

        </header> */
