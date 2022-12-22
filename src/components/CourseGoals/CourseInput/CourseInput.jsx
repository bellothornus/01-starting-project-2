import CourseInputError from "./CourseInputError";

export default function CourseInput({ 
  isValid, 
  onChangeHandler,
  labelHtmlFor,
  labelValue,
  inputId,
  inputPlaceholder,
  messageError}){
  // <CourseInput 
  // isValid={isValid} 
  // onChangeHandler={goalInputChangeHandler}
  // labelHtmlFor='newInput'
  // labelValue='New Input'
  // inputId='newInput'
  // inputPlaceholder='Write here your new input!'
  // /> {
  return (
    <div>
      <label htmlFor={labelHtmlFor} >{labelValue} {!isValid && '*'} </label>
      <input id={inputId} type="text" placeholder={inputPlaceholder} onChange={onChangeHandler} />
      {!isValid && <CourseInputError message={messageError && messageError }/> }
    </div>
  )
};