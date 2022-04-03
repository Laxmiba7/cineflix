import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import React from 'react';
import {
  Navbar, Container, Button,
} from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import TextError from './TextError';
import SearchItem from '../redux/action/SearchItem';

const initialValues = {
  title: '',
};

const validationSchema = Yup.object({

  title: Yup.string().required('Please Enter a title to search'),

});
const Header = () => {
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(SearchItem(values));
  };
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <div>
        <Navbar expand="lg">
          <Container fluid>
            <Link to="/" style={{ textDecoration: 'none' }}>
              {' '}
              <Navbar.Brand>CineFlix</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <div className="d-flex">
                <div className="nav-searchbar">
                  <Form>
                    <Field
                      type="text"
                      placeholder="Search by title"
                      className="me-2"
                      aria-label="Search"
                      id="title"
                      name="title"
                    />
                    <ErrorMessage name="title" component={TextError} />
                    <Button type="submit" variant="outline-success">Search</Button>
                  </Form>
                </div>

                <div className="nav-avatar d-flex">
                  <NavLink className="text-white" to="favorites" style={{ textDecoration: 'none' }}>My Favorites</NavLink>
                  <BiUserCircle />
                  <Link to="/signin" style={{ textDecoration: 'none' }}><h4 className="ms-3 text-white">Sign In</h4></Link>

                </div>

              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>
    </Formik>
  );
};
export default Header;
