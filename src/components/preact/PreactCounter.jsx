import { useState } from 'preact/hooks';

export default function Counter() {
  const [count, setCount] = useState(0)

  const clicked = () => {
    setCount(count + 1)
  }

  return (
    <button style="display: inline-block;
    padding-right: 4px;
    padding-left: 4px;
    border-style: solid;
    border-radius: 4px;
    border-width: 1px;
    border-color: #673AB8;
    background: revert;"onClick={clicked}>Clicked {count} {count === 1 ? "time" : "times"}</button>
  )
}

