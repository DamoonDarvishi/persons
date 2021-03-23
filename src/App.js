import React, { useState } from "react";
import styles from "./App.module.css";
import Char from "./char/Char";
import Person from "./person/Person";
import Validation from "./validation/Validation";

function App() {
  const [state, setState] = useState({
    persons: [
      { name: "Damoon", age: 33, id: "1a3e" },
      { name: "Mobina", age: 27, id: "1e3d" },
    ],
  });
  const [showPersons, setShowPersons] = useState(false);

  const style = {
    border: "none",
    padding: "8px 14px",
    backgroundColor: "blueviolet",
    color: "#fff"
  };

  const nameChangeHandler = (e, id) => {
    const personIndex = state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {...state.persons[personIndex]};
    person.name = e.target.value;
    const persons = [...state.persons];
    persons[personIndex] = person;
    setState({ persons: persons });
  };

  const toggleHandler = () => {
    setShowPersons(!showPersons);
  };

  const deletePersonHandler = (personIndex) => {
    const persons = [...state.persons];
    persons.splice(personIndex, 1);
    console.log(persons);
    setState({ persons: persons });
  };

  let persons = null;
  if (showPersons) {
    persons = (
      <div>
        {state.persons.map((person, index) => {
          return (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => deletePersonHandler(index)}
              changed={(e) => nameChangeHandler(e, person.id)}
            />
          );
        })}
      </div>
    );
    style.backgroundColor = "red"
  }

  const [text, setText] = useState('');

  const newchangeText = (e) => {
    const writeText = e.target.value;
    setText(writeText);
  }

  const deleteCharHandle = (index) => {
    const words = text.split('');
    words.splice(index, 1);
    const updatedText = words.join('');
    setText(updatedText)

  }
  const charList = text.split('').map((word, index) => {
    return <Char character={word} key={index} click={() => deleteCharHandle(index)} />
  })

  return (
    <div className={styles.App}>
      <h1>Hi, I'm a React App</h1>
      <button style={style} onClick={toggleHandler}>
        Show person
      </button>
      {persons}

      <hr />
      <h1>New Line</h1>
      <input type="text" onChange={newchangeText} />
      <p>{text}</p>
      <Validation inputLength={text.length} />
        {charList}
    </div>
  );
}

export default App;
