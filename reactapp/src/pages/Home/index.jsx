import React, { useState, useEffect } from "react"; // hooks -> funções que conectam funções
import "./styles.css";

import { Card } from "../../components/Card";

export function Home() {
  const [user, setUser] = useState('(digite o seu nome)');
  const [users, setUsers] = useState([]);
  const [apiUser, setApiUser] = useState({ name: '', avatar: '' })

  function handleAddUser() {
    const newUser = {
      name: user,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    setUsers(prevState => [...prevState, newUser]);
  }

  useEffect(() => {
    fetch('https://api.github.com/users/Lucas-Henrique-Lopes-Costa')
      .then(response => response.json())
      .then(data => {
        setApiUser({
          name: data.name,
          avatar: data.avatar_url
        })
      })
    }, [])

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        
        <div>
          <strong>Olá {apiUser.name}!</strong>
          <img src={apiUser.avatar} alt="Avatar" />
        </div>
      </header>
      
      
      <input 
        type="text"
        placeholder="Digite o seu nome..."
        onChange={e => setUser(e.target.value)}
      />
      <button type="button" onClick={handleAddUser}>
        Adicionar
      </button>

      {
        users.map((user, id) => (
          <Card 
            key={id}
            name={user.name}
            time={user.time}
          />
        ))
      }
    </div>
  );
}
