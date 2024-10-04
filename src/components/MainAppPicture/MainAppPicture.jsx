import MainPicture from '../../assets/images/girl.png';
import { StyledAppPicture } from './MainAppPicture.styled';
const MainAppPicture = ({ imgClass }) => {
  return (
    <StyledAppPicture
      className={imgClass && `${imgClass}`}
      src={MainPicture}
      alt="main app picture"
      width="626"
    />
  );
};

export default MainAppPicture;
