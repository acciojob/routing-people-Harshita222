import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './UserList';
import UserDetail from './UserDetail';

const App = () => {
  const users = [
    { id: 1, name: 'Harshit Kumari', email: 'kumariharsita501@gmail.com', location: 'Siwan, Bihar' },
    { id: 2, name: 'John Doe', email: 'john.doe@example.com', location: 'New York, USA' },
    // Add more users as needed
  ];

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={() => <UserList users={users} />} />
          <Route path="/user/:id" render={(props) => {
            const userId = parseInt(props.match.params.id, 10);
            const user = users.find(user => user.id === userId);
            return <UserDetail user={user} />;
          }} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
