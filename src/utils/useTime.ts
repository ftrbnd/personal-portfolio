import { useState, useEffect } from 'react';

const useTime = () => {
  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [meridiem, setMeridiem] = useState<'AM' | 'PM'>('AM');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();

      setHour(now.getHours() % 12 === 0 ? 12 : now.getHours() % 12);
      setMinute(now.getMinutes());
      setMeridiem(now.getHours() > 11 ? 'PM' : 'AM');
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return {
    hour,
    minute,
    meridiem
  };
};

export default useTime;
