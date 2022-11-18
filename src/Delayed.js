import React from 'react';
import { useState, useEffect } from 'react';
import { Debounce } from './Debounce';
export default function Delayed() {
  const [data, setData] = useState();
  const debouncevalue = Debounce(data);

  function handleChange(e) {
    setData(e.target.value);
  }
  useEffect(() => {
    console.log(debouncevalue);
  }, [debouncevalue]);

  return (
    <>
      <input onChange={handleChange} placeholder="Type Here" />
    </>
  );
}
