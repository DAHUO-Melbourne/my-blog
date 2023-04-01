import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

interface CountDownProps {
  time: number;
  onEnd: () => void;
}

const CountDown: React.FC<CountDownProps> = ({ time, onEnd }) => {
  const [count, setCount] = useState(time || 60);

  useEffect(() => {
    if (count === 0) {
      onEnd();
      return;
    }
    const countDownInterval = setTimeout(() => {
      setCount(count - 1);
    }, 1000);
    return () => clearTimeout(countDownInterval);
  }, [count, onEnd]);

  //   useEffect(() => {
  //     if (count === 0) {
  //       onEnd();
  //       return;
  //     }
  //     const countDownInterval = setInterval(() => {
  //       setCount((count) => {
  //         return count - 1;
  //       });
  //     }, 1000);
  //     return () => clearInterval(countDownInterval);
  //   }, [time, onEnd, count]);

  return <div className={styles.countdown}>{count}</div>;
};

export default CountDown;
