import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import UserDetails from '../components/UserDetails';

const App = () => {
  const users = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com' },
    { id: 3, firstName: 'Jim', lastName: 'Beam', email: 'jim@example.com' }
  ];

  return (
    <Router>
      <div>
        <h1>User List</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.firstName} {user.lastName}</Link>
            </li>
          ))}
        </ul>
        <Switch>
          <Route path="/users/:userId">
            <UserDetails users={users} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
