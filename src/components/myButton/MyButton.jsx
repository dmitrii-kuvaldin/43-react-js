import "./myButton.css";

export default function MyButton(props) {
  console.log(props);
  return (
    <button type={props.type} onClick={props.onClick} className="myButton">
      {props.name}
    </button>
  );
}
