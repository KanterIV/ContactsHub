import css from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from 'components/Navigation/Navigation';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userRefresh } from 'redux/authReducer';
import RestictedRoute from 'components/RestictedRoute/RestictedRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import { selectIsLoading } from 'redux/contactsSelectors';
import { selectAuthIsLoading } from 'redux/authSelectors';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  const authIsLoading = useSelector(selectIsLoading);
  const contactIsLoading = useSelector(selectAuthIsLoading);

  return (
    <>
      <Navigation />
      <div className={css.wrapper}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/register"
              element={
                <RestictedRoute>
                  <Register />
                </RestictedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <RestictedRoute>
                  <Login />
                </RestictedRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </div>
      <ToastContainer />
      {authIsLoading || contactIsLoading ? <Loader /> : null}
    </>
  );
};
