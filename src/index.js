import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Game from './game.js'
import PulseText from 'react-pulse-text';

function App() {
  return (
    <React.StrictMode>
     <div className="site">
     <PulseText text="Tic Tac Toe" duration={6000}>
        <h1>Tic Tac Toe</h1>
      </PulseText>
      <Game />
     </div>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
