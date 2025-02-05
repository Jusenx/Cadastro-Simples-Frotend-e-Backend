import { useEffect, useState, useRef } from "react";
import "./style.css";
import Trash from "../../assets/trash.svg";
import api from "../../services/api";

function Home() {
  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers() {
   const usersFromApi = await api.get('/usuarios')
   setUsers(usersFromApi.data)
   console.log(users)
  }

  async function createUsers() {
    await api.post('/usuarios', {
      email: inputEmail.current.value,
      name: inputName.current.value,
      age: inputAge.current.value
    })
    getUsers()
   }

   async function deletarUser(id) {
    await api.delete(`/usuarios/${id}`)

    getUsers()
   }

  
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuário</h1>
        <input type="text" name="nome" placeholder="Nome" ref={inputName}/>
        <input type="number" name="idade" placeholder="Idade" ref={inputAge}/>
        <input type="email" name="email" placeholder="E-mail" ref={inputEmail}/>
        <button type="button" onClick={createUsers} >Cadastrar</button>
      </form>

      

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>Idade: <span>{user.age}</span></p>
            <p>Nome:  <span>{user.name}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} alt="Excluir" onClick={() => deletarUser(user.id)}/>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
