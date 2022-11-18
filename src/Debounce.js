import { useState, useEffect } from 'react';

export const Debounce = (input, delay = 300) => {
  const [debouncevalve, setDebouncevalue] = useState(input);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncevalue(input), delay);
    return () => {
      clearTimeout(timer);
    };
  }, [input, delay]);
  return debouncevalve;
};
