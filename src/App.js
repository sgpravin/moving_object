import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [getValues, setGetValues] = useState([]);
  const [increment, setIncrement] = useState(1);
  const [seconds, setSeconds] = useState(0);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  //Timer function
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (seconds === 30) {
      alert("You're running out of time. Press ok to restart the game");
      setSeconds(0);
      setGetValues([]);
      setIncrement(1);
    }
  }, [seconds]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  // Function to handle shuffle button click
  const handleShuffle = () => {
    setNumbers(shuffleArray([...numbers]));
    setGetValues([]);
    setIncrement(1);
    setSeconds(0);
  };

  //Function to handle click on numbers button
  const handleClick = (e) => {
    if (getValues.length <= 8) {
      setGetValues([...getValues, e.target.value]);
      if (e.target.value == increment) {
        setIncrement(increment + 1);

        //Condition to finish the first level to call suffle to create new order
        if (getValues.length == 8) {
          alert(`Great you have successfuly finished this level at ${seconds} sec. Here is the next level`);
          handleShuffle(numbers);
        }
      } else {
        setGetValues([]);
        setIncrement(1);
        setSeconds(0);
        alert(
          `You clicked on ${e.target.value} but it should be ${increment}. Please try again from starting`
        );
      }
    } else {
      setGetValues([]);
    }
  };

  return (
    <div className="myApp">
      <div className="one">
        <button
          value={numbers[0]}
          className="button1"
          onClick={(e) => handleClick(e)}
        >
          {numbers[0]}
        </button>
      </div>
      <div className="two">
        <button
          value={numbers[1]}
          className="button1"
          onClick={(e) => handleClick(e)}
        >
          {numbers[1]}
        </button>
      </div>
      <div className="three">
        <button
          value={numbers[2]}
          className="button2"
          onClick={(e) => handleClick(e)}
        >
          {numbers[2]}
        </button>
      </div>
      <div className="four">
        <button
          value={numbers[3]}
          className="button3"
          onClick={(e) => handleClick(e)}
        >
          {numbers[3]}
        </button>
      </div>
      <div className="five">
        <button
          value={numbers[4]}
          className="button4"
          onClick={(e) => handleClick(e)}
        >
          {numbers[4]}
        </button>
      </div>
      <div className="six">
        <button
          value={numbers[5]}
          className="button5"
          onClick={(e) => handleClick(e)}
        >
          {numbers[5]}
        </button>
      </div>
      <div className="seven">
        <button
          value={numbers[6]}
          className="button6"
          onClick={(e) => handleClick(e)}
        >
          {numbers[6]}
        </button>
      </div>
      <div className="eight">
        <button
          value={numbers[7]}
          className="button7"
          onClick={(e) => handleClick(e)}
        >
          {numbers[7]}
        </button>
      </div>
      <div className="nine">
        <button
          value={numbers[8]}
          className="button8"
          onClick={(e) => handleClick(e)}
        >
          {numbers[8]}
        </button>
      </div>
      <div className="showValue">
        <ul>
          {getValues.map((val, index) => (
            <li key={index}>{val}</li>
          ))}
        </ul>
      </div>
      <div className="Time">{formatTime(seconds)}</div>
    </div>
  );
};

export default App;
