import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Game from './game.js';
import { useState, useEffect } from 'react';



function Title(props) {
  const [ currentText, setCurrentText ] = useState("T");
  const [ length, setLength ] = useState(2)

  useEffect(() => {
    setTimeout(() => {
      setCurrentText(props.text.slice(0, length));
      props.text.slice(length, length + 1)===" " ? setLength((length) => length + 2) : setLength((length) => length + 1)
    }, props.loadTime);
  }, [currentText])

  return (
        <h1>{currentText}</h1>
  )
}


function App() {

  const titleText = "Tic Tac Toe."
  const loadTime = 500

  const [ display, setDisplay] = useState("transparent")

  useEffect(() => {
    setTimeout(() => {
      setDisplay("")
    }, loadTime*(titleText.replace(" ", "").length-1))
  }, [])

  return (
    <React.StrictMode>
     <div className="site">
      <Title text={titleText} loadTime={loadTime}/>
      <div className={display + " content"}>
        <Game />
      </div>
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
