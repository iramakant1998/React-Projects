import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState('');
  const [task, setTask] = useState([]);
  function hangleChange(e) {
    setData(e.target.value);
  }

  function handleClick() {
    // e.preventDefalut();
    setTask([...task, data]);
    setData('');
  }

  function removeItems(a) {
    const finalData = task.filter((curEle, index) => {
      return index !== a;
    });
    setTask(finalData);
  }

  return (
    <div>
      <input onChange={hangleChange} placeholder="type here" />
      <button onClick={handleClick}>Add</button>
      {task.map((value, index) => {
        return (
          <>
            <p>
              {index + ':' + ' '}
              {value}
              <button onClick={() => removeItems(index)}>Delete</button>
            </p>
          </>
        );
      })}
    </div>
  );
}
