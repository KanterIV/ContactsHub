import styled from 'styled-components';

export const StyledDropdownMenu = styled.ul`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(110%);

  width: 160px;
  padding: 10px 0 10px 0;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(64, 123, 255, 0.2) 0px 4px 8px 0px;

  .dropdown-list-item:first-child {
    margin-bottom: 10px;
  }

  .button {
    display: block;
    width: 100%;
    padding: 0px 16px 0px 16px;
    text-align: left;
    border: none;
    background-color: transparent;

    &:hover,
    &:focus {
    }
  }
`;
