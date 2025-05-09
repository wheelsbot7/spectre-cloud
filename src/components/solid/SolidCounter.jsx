import { createSignal } from 'solid-js';

export default function Counter() {
  const [count, setCount] = createSignal(0)

  const clicked = () => {
    setCount(count => count + 1);
  }

  return (
    <button style="display: inline-block;
    padding-right: 4px;
    padding-left: 4px;
    border-style: solid;
    border-radius: 4px;
    border-width: 1px;
    border-color: #446B9E;
    background: revert;"onClick={clicked}>Clicked {count} {count() === 1 ? "time" : "times"}</button>
  )
}

