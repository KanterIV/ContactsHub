import Navigation from 'components/Navigation/Navigation';
import Loader from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectAuthIsLoading } from 'redux/authSelectors';
import { selectIsLoading } from 'redux/contactsSelectors';
import { ToastContainer } from 'react-toastify';

const SharedLayout = () => {
  const authIsLoading = useSelector(selectIsLoading);
  const contactIsLoading = useSelector(selectAuthIsLoading);

  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      {authIsLoading || contactIsLoading ? <Loader /> : null}
      <ToastContainer />
    </>
  );
};

export default SharedLayout;
