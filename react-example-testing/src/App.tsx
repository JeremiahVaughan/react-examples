import React, {useState} from 'react';
import './App.css';
import UserForm from "./components/user-form";
import { User } from './model/user';
import UserList from "./components/user-list";


function App() {
  const [users, setUsers] = useState<User[]>([])

  const onUserAdd = (user: User) => {
    setUsers([...users, user])
  }
  return (
    <div className="App">
      <UserForm onUserAdd={onUserAdd}/>
      <hr />
      <UserList users={users}/>
    </div>
  );
}

export default App;
