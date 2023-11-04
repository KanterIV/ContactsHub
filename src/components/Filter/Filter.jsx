import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { setFilter } from 'redux/contactsReducer';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterInputChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <>
      <p>Fined contacts by name</p>
      <input
        className={css.filterInput}
        onChange={handleFilterInputChange}
        type="text"
        name="filter"
      />
    </>
  );
};
