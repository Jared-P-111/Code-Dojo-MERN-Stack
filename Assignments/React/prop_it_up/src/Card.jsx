const Card = (props) => {
  const { name, age, hair, changeAge, idx } = props;

  return (
    <div>
      <h1>Name: {name}</h1>
      <p>{idx}</p>
      <p>Age: {age}</p>
      <p>Hair Color: {hair}</p>
      <button onClick={() => changeAge(idx)}>Birthday!</button>
    </div>
  );
};

export default Card;
