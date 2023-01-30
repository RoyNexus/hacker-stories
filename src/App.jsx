import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const welcome = {
  greeting: 'Hello',
  title: 'React'
};

const list = [
  {
    title: 'React',
    url: 'https://react.js',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Refactoring',
    url: 'https://refactoring.io',
    author: 'Martin Fowler',
    num_comments: 5,
    points: 2,
    objectID: 1
  }
];

function App() {
  console.log("Starting App()");

  return (
    <div className="App">
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>

      <label htmlFor='search'>Search: </label>
      <input id="search" type="text" />

      <List />
    </div>
  )
}

function List() {
  return (
    <ul>
      {list.map(function (item) {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        );
      })}

    </ul>
  );
}

export default App
