<script>
  import Botones from "./Botones";
</script>

<style>

</style>

<div class="Proveedor">
  <div class="container">
    <div class="row">
      <div class="col my-auto">
        <form>
          <div class="form-row">
            <div class="form-group col-6">
              <label for="lastname">Portal</label>
              <input
                type="text"
                class="form-control"
                id="portal"
                aria-describedby="portalHelp" />
            </div>
            <div class="col-6">
              <label for="id">Id trader</label>
              <input
                type="text"
                class="form-control"
                id="id"
                aria-describedby="idHelp" />
            </div>
          </div>

          <label for="name">Llave pública</label>
          <input
            type="text"
            class="form-control"
            id="key"
            aria-describedby="keyHelp" />
          <Botones />
        </form>
      </div>
    </div>
  </div>
</div>
