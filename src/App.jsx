import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userRefresh } from 'redux/authReducer';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import RestictedRoute from 'components/RestictedRoute/RestictedRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import Loader from 'components/Loader/Loader';
import 'modern-normalize/modern-normalize.css';
import 'react-toastify/dist/ReactToastify.css';

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
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
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
        </Route>
      </Routes>
    </Suspense>
  );
};
