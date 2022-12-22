import React, { useState } from "react";

// import FormControl from "./FormControl";
import Button from "../../UI/Button/Button";
import CourseInputError from "./CourseInputError";

import CourseInput from "./CourseInput";
import styles from './CourseInput.module.css'
// import "./CourseInput.css";

const CourseForm = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  let listCourseInputProperties = [
    {
      isValid:isValid, //pero puede ser isValid y cargar el valor dinamicamente
      onChangeHandler:goalInputChangeHandler,
      labelHtmlFor:'goalInput',
      labelValue:'Course Goal Dinamic',
      inputId:'goalInput',
      inputPlaceholder:'Write your goal here!',
      messageError:'You Have to fill the input above!'
    },
    {
      isValid:true,
      onChangeHandler:null,
      labelHtmlFor:'newInput',
      labelValue:'Dinamic Input Generated',
      inputId:'newInput',
      inputPlaceholder:'Write here your new input!',
      messageError:'This is the customized message error'
    },
  ];

  let listCourseInputs = listCourseInputProperties.map(inputProperty => <CourseInput {...inputProperty}/> )
  
  //cada vez que alguien escribe sobre el input
  function goalInputChangeHandler(event) {
    let inputValue = event.target.value;
    setIsValid(inputValue.trim().length > 0 ? true : false);
    setEnteredValue(inputValue);
  }
  //cada vez que añaden un nuevo objetivo
  function formSubmitHandler(event) {
    event.preventDefault();
    let isEmptyEnteredValue = enteredValue.trim().length === 0;
    setIsValid(isEmptyEnteredValue ? false : true);
    //isValid && props.onAddGoal(enteredValue);
    !isEmptyEnteredValue && props.onAddGoal(enteredValue);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className={`form-control ${isValid ? "" : "invalid"}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div> */}
      {/* <FormControl invalid={!isValid}>
        <label for="goalInput" >Course Goal</label>
        <input id="goalInput" type="text" placeholder="Write your goal here!"onChange={goalInputChangeHandler} />
      </FormControl>  */}
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`} >
        {/* <label htmlFor="goalInput" >Course Goal {!isValid && '*'} </label>
        <input id="goalInput" type="text" placeholder="Write your goal here!" onChange={goalInputChangeHandler} />
        {!isValid && <CourseInputError /> }
        <label htmlFor="inputTest" >Input Test Error {!isValid && '*'} </label>
        <input id='inputTest' type="text" placeholder="Input to test the errors, ignore it"/>
        {!isValid && <CourseInputError /> } */}

        {/* <CourseInput 
        isValid={isValid} 
        onChangeHandler={goalInputChangeHandler}
        labelHtmlFor='newInput'
        labelValue='New Input'
        inputId='newInput'
        inputPlaceholder='Write here your new input!'
        /> */}
        {/* {listCourseInputProperties.map(inputProperties =>
          <CourseInput {...inputProperties} />
        )} */}
        {listCourseInputs}
      </div>  
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseForm;
