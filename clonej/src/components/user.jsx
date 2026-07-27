function User(props) {
    return (
      <div>
        <h1>Name: {props.name} </h1>
        <h2>Age: {props.age}</h2>
        <h2>class: {props.class}</h2>
      </div>
    );
  }

  export default User;