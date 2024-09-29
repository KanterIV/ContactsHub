import { Rings } from 'react-loader-spinner';
import { StyledLoaderBackdrop } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoaderBackdrop>
      <Rings color="#4fa94d" />
    </StyledLoaderBackdrop>
  );
};

export default Loader;
