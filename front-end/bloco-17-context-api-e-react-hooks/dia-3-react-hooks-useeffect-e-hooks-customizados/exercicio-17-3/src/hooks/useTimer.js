import { useEffect, useState } from 'react';

function useTimer() {

  const [number, setNumber] = useState('espere');
  const [isMultiple, setMultiple] = useState(false);
  const [timer, setTimer] = useState(5);

  const updateNumberTimer = 5000;
  const unmountTimer = 3000;

  const verifyMultiple = (newNumber) => {
    if (newNumber % 3 === 0 || newNumber % 5 === 0) {
      setMultiple(true);
      setTimeout(() => setMultiple(false), unmountTimer);
    }
  }

  useEffect(() => {
    if (number === 'espere') {
      setInterval(() => {
        const newNumber = Math.floor(Math.random()*100);
        verifyMultiple(newNumber);
        setNumber(newNumber);
      }, updateNumberTimer)
    };

    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => prevTimer !== 1 ? prevTimer - 1 : 5)
    }, 1000)


    return () => {
      clearInterval(timerInterval);
    }

  }, []);

  return {number, isMultiple, timer};
}

export default useTimer;
