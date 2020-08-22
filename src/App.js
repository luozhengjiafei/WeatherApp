import React from 'react';
import UserInterface from './App/userInterface/userInterface';
import "./index.scss";

function App() {
  return (
    <div className="app evening">
    <main>
      <UserInterface/>
      <div className="location">New York City, US</div>
      <div className="date">{new Date().toDateString()}</div>
    </main>
    </div>
  );
}

export default App;
