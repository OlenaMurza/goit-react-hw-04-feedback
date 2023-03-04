import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 5px 15px;
  border: 2px solid grey;
  border-radius: 5px;
  text-transform: capitalize;
  font-weight: bold;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 10px;
  }
  :hover,
  :focus {
    background-color: #1E90FF;
    color: black;
  }
`;
