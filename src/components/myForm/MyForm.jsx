import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
import './myForm.css'

export default function MyForm() {
  return (
    <form className='myForm'>
      <MyInput placeholder={'login'} type={'text'} name={'login'} />
      <MyInput placeholder={'email'} type={'email'} name={'email'}  />
      <MyInput placeholder={'password'} type={'password'} name={'password'} />
      <MyButton name={'Отправить форму'} type={'submit'}  />
    </form>
  );
}
