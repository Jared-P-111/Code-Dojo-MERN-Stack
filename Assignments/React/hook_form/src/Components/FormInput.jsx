import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
  color: #111112;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  justify-content: space-between;

  & input {
    margin-left: 30px;
  }

  & .inputContainer {
    display: flex;
    justify-content: space-between;
  }

  & p {
    font-weight: normal;
  }
`;

const FormInput = ({ data, setData }) => {
  //🧈 ------------- AUTH HANDLER FUNCTION -------------
  const updateData = (targetIdx, value, currItemName) => {
    const newData = data.map((item, idx) => {
      if (idx === targetIdx) {
        switch (currItemName[0]) {
          case 'First Name':
            if (value.length > 2) {
              console.log(`First Name criteria met`);
              item[currItemName][1] = true;
              item[currItemName][0] = value;
            }
            break;
          case 'Last Name':
            if (value.length > 2) {
              console.log('Last Name criteria met');
              item[currItemName][1] = true;
              item[currItemName][0] = value;
            }
            break;
          case 'Email':
            if (value.length > 5) {
              console.log('Email criteria met');
              item[currItemName][1] = true;
              item[currItemName][0] = value;
            }
            break;
          case 'Password':
            if (value.length > 8) {
              console.log('Password criteria met');
              item[currItemName][1] = true;
              item[currItemName][0] = value;
            }
            break;
          case 'Confirm Password':
            if (value.length > 8) {
              console.log('Confirm Password criteria met');
              item[currItemName][1] = true;
              item[currItemName][0] = value;
            }
            break;
          default:
            break;
        }
      }
      return item;
    });
    setData(newData);
  };

  return (
    <div>
      {data.map((item, idx) => {
        let currItemName = Object.keys(item);
        let currItemValue = Object.values(item);

        return (
          <div key={idx}>
            <StyledInput>
              <div className="inputContainer">
                <label htmlFor={currItemName}>{currItemName}</label>
                <input
                  type="text"
                  name={currItemName}
                  id={currItemName}
                  onChange={(e) => updateData(idx, e.target.value, currItemName)}
                />
              </div>
              <p>{!currItemValue[0][1] ? currItemValue[0][2] : ''}</p>
            </StyledInput>
          </div>
        );
      })}
      <h5 style={{ textDecoration: 'underline', marginTop: '40px' }}>Your Details</h5>
      {data.map((item, idx) => {
        let currItemValue = Object.values(item);
        return (
          <div key={idx}>
            <p>{currItemValue[0][0]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FormInput;
