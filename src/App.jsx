import css from './App.module.css';
import { Grid } from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from 'components/Navigation/Navigation';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
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
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};
