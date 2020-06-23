<script>
  import Numeros from "./elements/Numeros";
  import Textos from "./elements/Textos";
</script>

<div class="form-row">
  <div class="form-group col-6">
    <label for="id">Cédula</label>
    <Numeros />
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
    <Textos />
  </div>
  <div class="form-group">
    <label for="lastname">Apellidos</label>
    <Textos />
  </div>
</div>

<label for="address">Dirección Calle y Numero</label>
<input
  placeholder="Bolivar 23"
  type="address"
  class="form-control"
  id="address"
  aria-describedby="addressHelp"
  pattern="[A-Za-z0-9]{10,50}"
 />
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
    <Numeros min="1111111" max="999999999" />
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
