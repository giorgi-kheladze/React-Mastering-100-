const Props = (props) => {
  console.log(props);
  return (
    <div className="props">
      <h1>Hello {props.name}</h1>
      <p>
        Age {props.age}. {props.message}!
      </p>
    </div>
  );
};

export default Props;
