import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser'
import UserList from './Components/Users/UserList'

function App() {

  const [userDataList, setUserDataList] = useState([]);

  const addUserDataHandler = (userPassed, agePassed) =>{
    console.log(userPassed, agePassed, 'hello');
    setUserDataList(prevUserDataList => {
      const updatedUserDataList = [...prevUserDataList, {name:userPassed, age: agePassed, id: Math.random().toString()}];
      return updatedUserDataList;
    })

  }

  return (
    <div >
      <AddUser onAddUser = {addUserDataHandler} />
      <UserList  users = {userDataList}/>
    </div>
  );
}
export default App;
