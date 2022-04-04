/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Formik, Form, ErrorMessage, Field,
} from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import TextError from './TextError';

const initialValues = {

  email: '',
  password: '',
};

const validationSchema = Yup.object({

  email: Yup.string().email('Not a valid email').required('This is required field'),
  password: Yup.string().required('This is required'),
});
// eslint-disable-next-line react/prop-types
const LoginPage = ({ authenticate }) => {
  const navigate = useNavigate();
  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
    authenticate();
    navigate('/movies');
  };
  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <div
          className="vh-100 gradient-custom"
          style={{ backgroundColor: '#222b31' }}
        >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  className="card text-white"
                  style={{ borderradius: '1rem', backgroundColor: '#ff424f' }}
                >
                  <Form>
                    <div className="card-body p-5 text-center">
                      <div className="mb-md-5 mt-md-4 pb-5">
                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                        <p className="text-white-50 mb-5">
                          Please enter your login and password!
                        </p>

                        <div className="form-outline form-white mb-4">
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="email">
                            Email
                          </label>
                          <ErrorMessage name="email" component={TextError} />
                        </div>

                        <div className="form-outline form-white mb-4">
                          <Field
                            type="password"
                            id="password"
                            name="password"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                          <ErrorMessage name="password" component={TextError} />
                        </div>

                        <p className="small mb-5 pb-lg-2">
                          <a className="text-white-50" href="#!">
                            Forgot password?
                          </a>
                        </p>

                        <button
                          className="btn btn-outline-light btn-lg px-5"
                          type="submit"

                        >
                          Login
                        </button>

                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                          <a href="#!" className="text-white">
                            <i className="fab fa-facebook-f fa-lg" />
                          </a>
                          <a href="#!" className="text-white">
                            <i className="fab fa-twitter fa-lg mx-4 px-2" />
                          </a>
                          <a href="#!" className="text-white">
                            <i className="fab fa-google fa-lg" />
                          </a>
                        </div>
                      </div>

                      <div>
                        <p className="mb-0">
                          Dont have an account?
                          <a href="#!" className="text-white-50 fw-bold">
                            Sign Up
                          </a>
                        </p>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Formik>
    </>
  );
};
export default LoginPage;
