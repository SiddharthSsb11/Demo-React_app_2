import React, { useState,  useRef } from "react";

import Wrapper from '../Helpers/Wrapper';
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  /* const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState(""); */
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [errorMessage, setErrorMessage] = useState();//undefined initially

 /*  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };
 */
  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    //console.log(errorMessage, "First");
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setErrorMessage({
        title: "Invalid Input",
        message: "Please enter a valid Username and Age (non empty values)",
      });
      return;
    }
    if (+enteredUserAge  < 1) {
      //console.log(errorMessage, "first");
      setErrorMessage({
        title: "Invalid Age",
        message: "Please enter a valid Age (Age > 1)",
      });
      return;
    }
    //console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = (e) => {
    //console.log(e, errorMessage, 'second');
    /* if (e.target === e.currentTarget) { //evemnt delegation
        setError(null);
      } else {
        return;
      } */
    setErrorMessage(null);
  };

  return (
    <Wrapper>
      {errorMessage && (
        <ErrorModal
          title={errorMessage.title}
          message={errorMessage.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
