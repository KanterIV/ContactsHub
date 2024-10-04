import MainAppPicture from 'components/MainAppPicture/MainAppPicture';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate('/register');
  };
  return (
    <>
      <MainAppPicture imgClass="initial-img" />
      <p>
        Welcome to the ContactsHub application! To use all the features of the
        app, please register and log in. Important: use a valid email address,
        as verification is required for access. Enjoy!
      </p>
      <button type="button" onClick={() => onButtonClick()}>
        Let's get started
      </button>
    </>
  );
};

export default WelcomePage;
