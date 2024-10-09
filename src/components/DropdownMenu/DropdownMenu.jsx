import { userLogout } from 'redux/authReducer';
import { StyledDropdownMenu } from './DropdownMenu.styled';
import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';

const DropdownMenu = ({ dropdownMenu, setDropdownMenu, userBtnRef }) => {
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);
  const handleLogOut = () => {
    setDropdownMenu(false);
    dispatch(userLogout());
  };

  useEffect(() => {
    const handleEscapeClick = event => {
      if (event.code === 'Escape') {
        setDropdownMenu(false);
      }
    };

    const handleOutsideDropdownClick = event => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        userBtnRef.current &&
        !userBtnRef.current.contains(event.target)
      ) {
        setDropdownMenu(false);
      }
    };

    window.addEventListener('keydown', handleEscapeClick);
    window.addEventListener('click', handleOutsideDropdownClick);

    return () => {
      window.removeEventListener('keydown', handleEscapeClick);
      window.removeEventListener('click', handleOutsideDropdownClick);
    };
  }, [setDropdownMenu, dropdownMenu, userBtnRef]);

  return (
    <StyledDropdownMenu ref={dropdownRef}>
      <li className="dropdown-list-item">
        <button className="button profile-btn" type="button">
          Profile <span className="soon">soon</span>
        </button>
      </li>
      <li>
        <button
          className="button logout-btn"
          type="button"
          onClick={handleLogOut}
        >
          Sign out
        </button>
      </li>
    </StyledDropdownMenu>
  );
};

export default DropdownMenu;
