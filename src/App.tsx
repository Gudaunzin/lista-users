import { useEffect, useState } from 'react';
import User from './components/User';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((resposta) => resposta.json())
      .then((dados) => setUsers(dados.users));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;
