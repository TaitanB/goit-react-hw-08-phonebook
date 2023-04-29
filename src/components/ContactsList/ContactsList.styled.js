import styled from 'styled-components';

export const Wraper = styled.div`
  border-radius: 20px;
  background-color: #ffffff75;
  width: 480px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const ContactList = styled.ul`
  width: 440px;
  display: grid;
  max-height: 60vh;
  overflow: auto;
  align-items: center;
  padding: 20px;
  gap: 10px;
  margin: 0 auto 0 0;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: #21212175;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #0303ab;
  }
`;

export const BtnContact = styled.button`
  padding: 5px 10px;
  border: 1px solid #0303ab;
  border-radius: 5px;
  background-color: #0303ab;
  color: rgb(213 239 230);
  font-weight: 700;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.4);

  :hover,
  :focus {
    background-color: rgb(171 38 3);
    border: 1px solid rgb(171 38 3);
    scale: 0.9;
  }
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px dashed #0303ab;

  p {
    font-weight: 500;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
  }
`;

export const FilteredContacts = styled.div`
  font-weight: 500;
  padding-top: 20px;
  margin-left: 20px;
`;

export const AllContacts = styled.div`
  font-weight: 500;
  padding-top: 20px;
  margin-left: 20px;
`;

export const NoContacts = styled.div`
  width: 440px;
  display: grid;
  height: 60vh;
  align-items: center;
  padding: 20px;
  font-weight: 600;
  font-size: 22px;
  color: rgb(232 238 245);
  justify-content: center;
  border-radius: 20px;
  background-color: #21212175;
  opacity: 0.85;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

// Kayla Bosco
// 466-902-2908

// Darnell Rowe
// 788-356-5397

// Ramon Nader
// 626-751-7002

// Lamar Gibson
// 357-364-0910

// Diane Thompson
// 382-401-1371

// Leslie Rosenbaum
// 707-287-8072

// Jaime West
// 774-307-1728

// Angelica Hermiston
// 456-840-4107

// Terence Buckridge
// 273-799-8729

// Virginia Pacocha
// 293-368-0908

// Andrew Littel
// 293-368-0908

// Rosie Simpson
// 227-91-26
