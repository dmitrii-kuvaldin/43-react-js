import './myInput.css'

export default function MyInput(props) {
  console.log(props);
  return (
    <input type={props.type} name={props.name} placeholder={props.placeholder} />
  )
}
