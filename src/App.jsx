import css from './App.module.css';
import { Grid } from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from 'components/Navigation/Navigation';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userRefresh } from 'redux/authReducer';
import RestictedRoute from 'components/RestictedRoute/RestictedRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import { ToastContainer } from 'react-toastify';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <div className={css.wrapper}>
        <Suspense
          fallback={
            <Grid
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="grid-loading"
              radius="12.5"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          }
        >
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
    </>
  );
};
