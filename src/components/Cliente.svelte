<style>

</style>

<div class="Cliente">
  <div class="container">
    <div class="row">
      <div class="col my-auto">
        <form>
          <div class="form-row">
            <div class="form-group col-6">
              <label for="id">Cédula</label>
              <input
                type="number"
                class="form-control"
                id="id"
                aria-describedby="idHelp" />
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
                  value="option2" />
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
                aria-describedby="nameHelp" />
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
              <label for="email">Dirección de Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp" />
            </div>
          </div>
          <div class="form-row">
          <div class="container">
            <div class="btn-group btn-group-md  text-align-center">
              <button type="submit" class="btn btn-outline-light">
                Guardar
              </button>
              <button type="" class="btn btn-outline-light">Modificar</button>
              <button type="" class="btn btn-outline-light">Eliminar</button>
              <button type="" class="btn btn-outline-light">Cancelar</button>
            </div>
          </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
