import Card from './Card.jsx';

const data = [
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
];

function App() {
  return (
    <div className="App">
      {data.map((item) => {
        return <Card name={item.name} age={item.age} hair={item.hair} />;
      })}
    </div>
  );
}

export default App;
