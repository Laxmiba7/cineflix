import { Formik, Form, Field } from 'formik';
import React from 'react';
import {
  Navbar, Container, Button, NavLink,
} from 'react-bootstrap';
import { BiUserCircle } from 'react-icons/bi';

const Header = () => (
  <Formik>
    <div>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">CineFlix</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="d-flex">
              <div className="nav-searchbar">
                <Form className="">
                  <Field
                    type="search"
                    placeholder="Search by title"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </div>

              <div className="nav-avatar d-flex">
                <NavLink className="text-white">My Favorites</NavLink>
                <BiUserCircle />
                <h4 className="ms-3">Sign In</h4>

              </div>

            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  </Formik>
);
export default Header;
