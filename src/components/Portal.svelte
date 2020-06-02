<script>
  import Botones from "./Botones";
</script>

<style>

</style>

<div class="Portal">
  <div class="container">
    <div class="row">
      <div class="col my-auto">
        <form>
          <div class="form-row">
            <div class="form-group col-4">
              <label for="id">URL</label>
              <input
                type="url"
                class="form-control"
                id="id"
                aria-describedby="idHelp" />
            </div>
            <div class="col-8">
              <label for="name">Llave pública</label>
              <input
                type="text"
                class="form-control"
                id="key"
                aria-describedby="keyHelp" />
            </div>
          </div>
          <div class="form-row">
          <div class="form-group col-6">
            <label for="region">Paises donde opera</label>
            <select id="region" class="form-control">
              <option selected>Elija...</option>
              <option>Chile</option>
              <option>Colombia</option>
              <option>Perú</option>
            </select>
          </div>

          <div class="form-group col-4">
            <label for="comision">Comisión</label>
            <input
              type="number"
              class="form-control"
              id="comision"
              aria-describedby="comisionHelp" />
          </div>
          </div>
          <Botones />
        </form>
      </div>
    </div>
  </div>
</div>
