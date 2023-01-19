import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Form = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    resource: 'characters',
    id: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { resource, id } = formState;
    navigate(`/${resource}/${id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-between gap-2 mb-3">
            <select
              name="resource"
              id="resource"
              className="form-select"
              value={formState.resource}
              onChange={handleChange}
            >
              <option value="characters">Characters</option>
              <option value="starships">Starships</option>
              <option value="vehicles">Vehicles</option>
              <option value="planets">Planets</option>
            </select>
            <input
              type="number"
              name="id"
              id="id"
              className="form-control"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary">
              GO
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
