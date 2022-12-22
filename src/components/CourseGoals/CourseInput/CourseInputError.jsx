export default function CourseInputError(props) {
  const errorStyle = {
    color: "red",
    fontSize: "12px",
    marginTop: "0px",
  };
  return (
    <p style={errorStyle}>
      {props.message ? props.message : "You have to fill the input above!"}
    </p>
  );
}
