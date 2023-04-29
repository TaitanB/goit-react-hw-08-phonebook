import styled from 'styled-components';

export const ContactsContainer = styled.div`
  display: grid;
  gap: 20px;
  height: 100vh;
  padding: 20px;
  grid-template-columns: repeat(2, 1fr);
  /* justify-items: center; */

  background-color: rgba(66, 75, 92, 0.5);

  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;

  > :first-child {
    grid-row: 1/1;
    /* grid-column: 1/1; */
  }

  > :nth-child(2) {
    grid-row: 2/2;
    /* grid-column: 1/1; */
  }

  > :last-child {
    grid-row: 1/3;
    /* grid-column: 2/2; */
  }
`;
