<style>

</style>

<div class="Operador">
  <div class="container">
    <div class="row">
      <div class="col my-auto">
        <form>
          <div class="form-group">
            <label for="id">Cédula</label>
            <input
              type="number"
              class="form-control"
              id="id"
              aria-describedby="idHelp" />

            <label for="name">Nombre</label>
            <input
              type="text"
              class="form-control"
              id="name"
              aria-describedby="nameHelp" />

            <label for="lastname">Apellido</label>
            <input
              type="text"
              class="form-control"
              id="lastname"
              aria-describedby="lastnameHelp" />
          </div>
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
              value="option2" />
            <label class="form-check-label" for="sex2">Hombre</label>
          </div>
          <br />

          <label for="address">Dirección</label>
          <input
            type="address"
            class="form-control"
            id="address"
            aria-describedby="addressHelp" />

          <div class="form-group">
            <label for="phone">Teléfono</label>
            <input
              type="number"
              class="form-control"
              id="phone"
              aria-describedby="phoneHelp" />

            <label for="email">Dirección de Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp" />

            <label for="country">País</label>
            <input
              type="text"
              class="form-control"
              id="country"
              aria-describedby="countryHelp" />
          </div>
          <div class="form-group">
            <label for="comision">Comision</label>
            <input
              type="number"
              class="form-control"
              id="comision"
              aria-describedby="comisionHelp" />

            <label for="discount">Descuento</label>
            <input
              type="number"
              class="form-control"
              id="discount"
              aria-describedby="discountHelp" />
          </div>

          <button type="submit" class="btn btn-outline-light">Guardar</button>
        </form>
      </div>
    </div>
  </div>
</div>
