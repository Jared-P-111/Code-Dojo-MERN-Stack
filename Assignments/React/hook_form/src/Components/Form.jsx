import React from 'react';
import styled from 'styled-components';
import FormInput from './FormInput';
import { useState } from 'react';

const StyledForm = styled.div``;

const Form = () => {
  const [data, setData] = useState([
    { 'First Name': ['', false, 'Field must be at least 2 characters long'] },
    { 'Last Name': ['', false, 'Field must be at least 2 characters long'] },
    { Email: ['', false, 'Field must be at least 5 characters long'] },
    { Password: ['', false, 'Your passwords must match'] },
    { 'Confirm Password': ['', false, 'Your passwords must match'] },
  ]);

  return (
    <StyledForm>
      <form type="submit">
        <FormInput data={data} setData={setData} />
        <button className="btn btn-primary">Submit Form</button>
      </form>
    </StyledForm>
  );
};

export default Form;
