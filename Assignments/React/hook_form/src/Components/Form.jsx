import React from 'react';
import styled from 'styled-components';
import FormInput from './FormInput';
import { useState } from 'react';

const StyledForm = styled.div`
  height: 50vh;
`;

const Form = () => {
  const [data, setData] = useState([
    { 'First Name': '' },
    { 'Last Name': '' },
    { Email: '' },
    { Password: '' },
    { 'Confirm Password': '' },
  ]);

  return (
    <StyledForm>
      <form>
        <FormInput data={data} setData={setData} />
      </form>
    </StyledForm>
  );
};

export default Form;
