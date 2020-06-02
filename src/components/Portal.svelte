<style>

</style>

<div class="Portal">
  <div class="container">
    <div class="row">
      <div class="col my-auto">
        <form>
          <div class="form-group">
            <label for="id">Nombre</label>
            <input
              type="text"
              class="form-control"
              id="id"
              aria-describedby="idHelp" />

            <label for="name">Llave pública</label>
            <input
              type="text"
              class="form-control"
              id="key"
              aria-describedby="keyHelp" />

            <div class="form-group">
              <label for="region">Paises donde opera</label>
              <select id="region" class="form-control">
                <option selected>Elija...</option>
                <option>Chile</option>
                <option>Colombia</option>
                <option>Perú</option>
              </select>
            </div>

            <div class="form-group">
              <label for="comision">Comisión</label>
              <input
                type="number"
                class="form-control"
                id="comision"
                aria-describedby="comisionHelp" />
            </div>
          </div>
          <button type="submit" class="btn btn-outline-light">Guardar</button>
        </form>
      </div>
    </div>
  </div>
</div>
