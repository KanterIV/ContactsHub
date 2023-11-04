import styled from 'styled-components';

export const StyledHeader = styled.header`
  border-bottom: 1px solid black;
  border-radius: 10px;
  padding: 20px 0 20px 0;
  margin-bottom: 50px;

  .header-nav {
    width: 1400px;
    margin: 0 auto;
  }
  .header-list {
    display: flex;
  }

  .header-link {
    color: black;
    border: 1px solid black;
    display: inline-block;
    padding: 15px;
    font-size: 18px;
    text-decoration: none;
    margin-right: 20px;
    border-radius: 10px;

    transition: all 0.3s;

    &.active {
      border: 1px solid white;
      background-color: black;
      color: white;
      border-radius: 10px;
    }
  }
`;
