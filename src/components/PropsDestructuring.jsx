const PropsDestructuring = ({ name, age, message }) => {
  // destructuring in the variable
  //   const { name, age, message } = props;
  return (
    <div>
      <h2>
        Hello {name}! age {age} {message}!
      </h2>
    </div>
  );
};

// in react new version this do not work
PropsDestructuring.defaultProps = {
  name: "giorgi",
  age: 19,
  message: "default message",
};

export default PropsDestructuring;
