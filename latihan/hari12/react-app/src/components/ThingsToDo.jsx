import sanbercode from "../assets/logo.png";

function ThingsToDo(props) {
  return (
    <div className="checkbox">
      <input type="checkbox" value={props.name} />
      <label htmlFor="">{props.name}</label>
    </div>
  );
}

export default ThingsToDo;
