import { Rings } from 'react-loader-spinner';
import { StyledLoaderBackdrop } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoaderBackdrop>
      <Rings color={`var(--logo-accent)`} />
    </StyledLoaderBackdrop>
  );
};

export default Loader;
