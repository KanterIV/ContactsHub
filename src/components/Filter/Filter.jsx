import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactsReducer';
import { StyledFilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterInputChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <StyledFilterInput
      className="filter-input"
      onChange={handleFilterInputChange}
      type="text"
      placeholder="Find contact..."
      name="filter"
    />
  );
};
