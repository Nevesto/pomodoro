import React from 'react';
import './App.css';
import Clock from './clock/Clock';
import Header from './header/header';
import Tasks from './tasklist/tasks';
import { ClockProvider } from './clock/clockContext';

function App() {
  return (
    <ClockProvider>
      <div className="App">
        <Header />
        <Clock />
        <Tasks />
      </div>
    </ClockProvider>
  );
}

export default App;
