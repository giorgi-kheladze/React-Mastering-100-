const PropsArray = ({ numbers, names }) => {
  return (
    <div>
      <div>
        {numbers.map((number) => (
          <h1 key={number}>{number}</h1>
        ))}
      </div>
      <div>
        {names.map((name) => (
          <h2 key={name}>{name}</h2>
        ))}
      </div>
    </div>
  );
};

export default PropsArray;
