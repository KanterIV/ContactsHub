import { useNavigate } from 'react-router-dom';
import WelcomePageImg from '../../assets/images/girl.png';
const WelcomePage = () => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate('/register');
  };
  return (
    <>
      <p>
        Welcome to the ContactsHub application! To use all the features of the
        app, please register and log in. Important: use a valid email address,
        as verification is required for access. Enjoy!
      </p>
      <button type="button" onClick={() => onButtonClick()}>
        Let's get started
      </button>
      <img
        className="initialpage-picture"
        src={WelcomePageImg}
        alt="welcome page img"
        width="626"
      />
    </>
  );
};

export default WelcomePage;
