import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button style={{
      display: "inline-block",
      paddingRight: "4px",
      paddingLeft: "4px",
      borderStyle: "solid",
      borderRadius: "4px",
      borderWidth: "1px",
      borderColor: "#58C4DC",
      background: "revert"
    }} onClick={handleClick}>
      Clicked {count} {count === 1 ? "time" : "times"}
    </ button>
  );
}

