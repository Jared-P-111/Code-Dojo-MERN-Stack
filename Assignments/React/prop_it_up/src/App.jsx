import { useState } from 'react';
import Card from './Card.jsx';

function App() {
  const [data, setData] = useState([
    {
      name: 'Doe Jane',
      age: 45,
      hair: 'Black',
    },
    {
      name: 'Smith, John',
      age: 88,
      hair: 'Brown',
    },
    {
      name: 'Fillmore, Millard',
      age: 88,
      hair: 'Brown',
    },
    {
      name: 'Smith, Maria',
      age: 88,
      hair: 'Brown',
    },
  ]);

  const changeAge = (targetIdx) => {
    const newData = data.map((person, idx) => {
      //Only fires if idx matches person needed during mapping to find/change person's age.
      if (idx === targetIdx) {
        person = {
          ...person,
          age: person.age + 1,
        };
      }
      return person;
    });
    setData(newData); //<-- State altered post data update.
  };

  return (
    <div className="App">
      {data.map((item, idx) => {
        return <Card name={item.name} age={item.age} hair={item.hair} changeAge={changeAge} idx={idx} key={idx} />;
      })}
    </div>
  );
}

export default App;
