<script>
  import BaseForm from "./BaseForm";
  import Botones from "./Botones";
</script>

<div class="Operador">
  <div class="container">
    <div class="row">
      <div class="col my-auto">
        <form>
          <BaseForm />
          <div class="form-row">
            <div class="form-group col-6">
              <label for="comision">Comision</label>
              <input
                type="number"
                class="form-control"
                id="comision"
                aria-describedby="comisionHelp" />
            </div>
            <div class="col-6">
              <label for="discount">Descuento</label>
              <input
                type="number"
                class="form-control"
                id="discount"
                aria-describedby="discountHelp" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-6">
              <label for="user">Usuario</label>
              <input
                type="number"
                class="form-control"
                id="user"
                aria-describedby="userHelp" />
            </div>
            <div class="col-6">
              <label for="pass">Contraseña</label>
              <input
                type="number"
                class="form-control"
                id="pass"
                aria-describedby="passHelp" />
            </div>
          </div>
          <Botones />
        </form>
      </div>
    </div>
  </div>
</div>
