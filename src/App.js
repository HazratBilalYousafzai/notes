import './App.css';
import List from './components/List';
import Navbar from './components/Navbar';
const { useState } = require("react")


function App() {

  return (
    <>
      <Navbar />
      <List />
    </>
  );
}

export default App;
