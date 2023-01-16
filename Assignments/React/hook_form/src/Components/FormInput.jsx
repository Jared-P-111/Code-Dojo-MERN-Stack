import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
  display: flex;
  color: #212529;
  font-weight: bold;
  justify-content: space-between;
  margin-bottom: 30px;

  & input {
    margin-left: 30px;
  }
`;

const FormInput = ({ data, setData }) => {
  const updateData = (targetIdx, value, currItemName) => {
    const newData = data.map((item, idx) => {
      if (idx === targetIdx) {
        item[currItemName] = value;
      }
      return item;
    });
    setData(newData);
  };

  return (
    <div style={{ color: '#212529', fontWeight: 'bold' }}>
      {data.map((item, idx) => {
        let currItemName = Object.keys(item);
        return (
          <div key={idx}>
            <StyledInput>
              <label htmlFor={currItemName}>{currItemName}</label>
              <input
                type="text"
                name={currItemName}
                id={currItemName}
                onChange={(e) => updateData(idx, e.target.value, currItemName)}
              />
            </StyledInput>
          </div>
        );
      })}
      <h5 style={{ textDecoration: 'underline' }}>Your Details</h5>
      {data.map((item) => {
        return (
          <>
            <div>{item['First Name']}</div>
            <div>{item['Last Name']}</div>
            <div>{item['Email']}</div>
            <div>{item['Password']}</div>
            <div>{item['Confirm Password']}</div>
          </>
        );
      })}
    </div>
  );
};

export default FormInput;
