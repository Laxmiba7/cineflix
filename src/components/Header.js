import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import {
  Nav, Button, Navbar, Container,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import * as Yup from 'yup';
import clearSearch from '../redux/action/ClearSearch';
import TextError from './TextError';
import SearchItem from '../redux/action/SearchItem';

const initialValues = {
  title: '',
};

const validationSchema = Yup.object({
  title: Yup.string().required('Please Enter a title to search'),
});
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = (values, onSubmitProps) => {
    dispatch(SearchItem(values));
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };
  return (
    <div>
      <Navbar expand="lg" className="navbar">
        <Container fluid>
          <Link
            to="/"
            style={{ textDecoration: 'none' }}
            onClick={() => dispatch(clearSearch())}
          >
            {' '}
            <Navbar.Brand style={{ color: '#FFF' }}>CineFlix</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className="d-flex ms-5 formMargin">
                <Field
                  type="text"
                  placeholder="Search by title"
                  className="me-2"
                  aria-label="Search"
                  id="title"
                  name="title"
                />
                <ErrorMessage name="title" component={TextError} />
                <Button variant="success" type="submit">
                  Search
                </Button>
              </Form>
            </Formik>
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <div className="nav-avatar d-flex">
                <NavLink
                  className="text-white  me-3 mt-3 fs-5"
                  to="/favorites"
                  style={{ textDecoration: 'none' }}
                >
                  My Favorites
                </NavLink>

                <Link to="/" style={{ textDecoration: 'none' }}>
                  <h4 className="ms-3 text-white fs-5 mt-2">
                    <Button
                      variant="outline-light"
                      onClick={() => {
                        navigate('/');
                      }}
                    >
                      <BiUserCircle className="fs-4" />
                      <span className=" ms-1">Sign Out</span>
                    </Button>
                  </h4>
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
