import React from 'react';
import './App.css';
import Boxes from './Boxes';

function App() {
  return (
    <div className='App'>
      <h1>Click on any boxes</h1>
      <Boxes boxCount={15} />
      <h4>
        Created by mohammadhossein hosseini github:
        <a href='https://github.com/mohammadhossein211/'>github</a>
      </h4>
    </div>
  );
}

export default App;
