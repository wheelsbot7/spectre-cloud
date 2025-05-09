<script>
  let count = $state(0);

  function handleClick() {
    count += 1;
  }
</script>

<button onclick={handleClick}>
  Clicked {count}
  {count === 1 ? "time" : "times"}
</button>

<style>
  button {
    display: inline-block;
    padding-right: 4px;
    padding-left: 4px;
    border-style: solid;
    border-radius: 4px;
    border-width: 1px;
    border-color: #ff3e00;
    background: revert;
  }
</style>
