import { StyledButton } from './Button.styled';

const Button = ({ children, styledClass, buttonType, onClickFunction }) => {
  return (
    <StyledButton
      className={`${styledClass}`}
      type={`${buttonType}`}
      onClick={onClickFunction ? () => onClickFunction() : null}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
