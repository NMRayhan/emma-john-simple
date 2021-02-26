import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const students = [
  { name: "Shakawat Ahmed", age: "23" },
  { name: "Mohammad Ali", age: "18" },
  { name: "Anisul Islam", age: "33" },
  { name: "Kamal Udiin", age: "43" },
]
function App() {
  var StudentStyle = { backgroundColor: "green", border: "1px solid red", padding: "10px", margin: "10px", fontVariant: "contextual", lineHeight: "2px" }
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(randomUsers => setUsers(randomUsers));
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PointChange></PointChange>
      </header>
      {
        <div className="row d-flex justify-content-evenly ">
          {
            users.map(user => {
              return (
                <div className="col-3" style={StudentStyle}>
                  <Student Name={user.name} Age={user.email}></Student>
                </div>
              )
            })
          }
        </div>
      }
    </div>
  );
}

function PointChange() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>Clicked {count} time</h2>
      <button onMouseMove={() => setCount(count + 1)} className="btn btn-success fs-3">Mouse Move</button>
    </div>
  )
}

function Student(props) {

  let { Name, Age } = props
  return (
    <div className="text-white">
      <h3>Name : {Name}</h3>
      <p>Email : {Age}</p>
    </div>
  )
}

export default App;
