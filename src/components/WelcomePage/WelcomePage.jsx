import MainAppPicture from 'components/MainAppPicture/MainAppPicture';
import { useNavigate } from 'react-router-dom';
import { StyledWelcomePage } from './WelcomPage.styled';

const WelcomePage = () => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate('/register');
  };
  return (
    <StyledWelcomePage className="container welcome-container">
      <MainAppPicture imgClass="initial-img" />
      <div className="description-container">
        <h1 className="title">
          Contacts<span className="title-accent">Hub</span> - your trusted space
          for saving contacts
        </h1>
        <p className="welcome-text">
          Welcome to the ContactsHub application! To use all the features of the
          app, please register and log in. Important: use a valid email address,
          as verification is required for access. Enjoy!
        </p>
        <button
          className="welcome-btn"
          type="button"
          onClick={() => onButtonClick()}
        >
          Let's get started
        </button>
      </div>
    </StyledWelcomePage>
  );
};

export default WelcomePage;
