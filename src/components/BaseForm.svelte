<script>
  let num;
  let v;

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

<div class="form-row">
  <div class="form-group col-6">
    <label for="id">Cédula</label>
    <input
      step="1"
      type="number"
      class="form-control {v}"
      id="id"
      aria-describedby="idHelp"
      required
      autocomplete="off"
      min="111111"
      max="9999999999"
      bind:value={num}
      on:blur={validarn(num, this)} />
    <div class="invalid-feedback">{mensaje[1]}</div>
  </div>
  <div class="form-group col-6 my-auto">
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="sex1"
        value="option1" />
      <label class="form-check-label" for="sex1">Mujer</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="sex2"
        value="option2"
        checked />
      <label class="form-check-label" for="sex2">Hombre</label>
    </div>
  </div>
</div>
<div class="form-row">
  <div class="form-group col-6">
    <label for="name">Nombres</label>
    <input
      type="text"
      class="form-control"
      id="name"
      aria-describedby="nameHelp"
      required
      autocomplete="off"
      maxlength="15"
      minlength="3" />
    <div class="invalid-feedback">{mensaje[2]}</div>
  </div>
  <div class="form-group">
    <label for="lastname">Apellidos</label>
    <input
      type="text"
      class="form-control"
      id="lastname"
      aria-describedby="lastnameHelp" />
  </div>
</div>

<label for="address">Dirección</label>
<input
  type="address"
  class="form-control"
  id="address"
  aria-describedby="addressHelp" />
<div class="form-row">
  <div class="form-group col-6">
    <label for="country">Pais</label>
    <select id="country" class="form-control">
      <option selected>Elija...</option>
      <option>Chile</option>
      <option>Colombia</option>
      <option>Perú</option>
    </select>
  </div>
  <div class="form-group col-6">
    <label for="district">Estado/Provincia</label>
    <select id="district" class="form-control">
      <option selected>Elija...</option>
      <option>Trujillo</option>
      <option>Zulia</option>
      <option>Barinas</option>
    </select>
  </div>
</div>
<div class="form-row">
  <div class="form-group col-6">
    <label for="phone">Teléfono</label>
    <input
      type="number"
      class="form-control"
      id="phone"
      aria-describedby="phoneHelp" />
  </div>
  <div class="form-group col-6">
    <label for="email">Email</label>
    <input
      type="email"
      class="form-control"
      id="email"
      aria-describedby="emailHelp" />
  </div>
</div>
