import React from 'react';
import './App.css';
import Clock from './clock/Clock';
import Header from './header/header';
import Tasks from './tasklist/tasks';
import Styles from './styleWindow/styles';
import { ClockProvider } from './clock/clockContext';

function App() {
  return (
    <ClockProvider>
      <div className="App">
        <Header />
        <Clock />
        {/* <Styles /> */}
        <Tasks />
      </div>
    </ClockProvider>
  );
}

export default App;
