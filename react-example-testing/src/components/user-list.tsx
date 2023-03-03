import React from 'react';
import {User} from "../model/user";

const UserList = ({users}: { users: User[] }) => {
  const renderedUsers = users.map((user) => {
    return <tr key={user.name}>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>;
  })
  return (
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
      </thead>
      <tbody data-testid="users">
      {renderedUsers}
      </tbody>
    </table>
  );
};

export default UserList;
