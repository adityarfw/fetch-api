import React from 'react';
import './App.css';

// https://jsonplaceholder.typicode.com/posts/1/comments

function App() {
  const [userData, setUserData] = React.useState([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  const displayData = userData.map((user) => {
    return (
      <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Body: {user.body}</p>
        <hr />
      </div>
    );
  });

  return <div className='App'>{displayData}</div>;
}

export default App;
