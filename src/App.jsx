import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const App = () => {
  console.log("Rendering App");

  const books = [
    {
      title: 'React',
      url: 'https://www.react.js',
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
    },
    {
      title: 'Software Estimation',
      url: 'https://wwww.contrux.com',
      author: 'Steve McConnel',
      num_comments: 6,
      points: 6,
      objectID: 2
    }
  ];

  return (
    <div className="App">
      <h1>
        Hello React
      </h1>

      <Search />

      <List list={books} />
    </div>
  );
};

const Search = () => {
  console.log("Rendering Search");
  return (
    <div>
      <label htmlFor='search'>Search: </label>
      <input id="search" type="text" />
    </div>
  );
};

const List = ({ list }) => {
  console.log("Rendering List");
  return (
    <ul>
      {list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
};

const Item = ({ item }) => {
  console.log("Rendering Item");
  return (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </li>

  );
};

export default App
