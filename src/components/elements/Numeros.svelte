<script>
  let num;
  let v;

  export let min = 111111;
  export let max = 9999999999;

  function validarn(num, t) {
    if (!num || num < t.min || num > t.max) {
      v = " is-invalid";
      t.value = "";
      t.focus();
    } else {
      v = " is-valid";
    }
  }
  const mensaje = ["Este campo es necesario", "Por favor verifica este campo"];
</script>

<style>
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>

<input
  step="1"
  type="number"
  class="form-control {v}"
  id="id"
  aria-describedby="idHelp"
  required
  autocomplete="off"
  {min}
  {max}
  bind:value={num}
  on:blur={validarn(num, this)} />
<div class="invalid-feedback">{mensaje[1]}</div>
