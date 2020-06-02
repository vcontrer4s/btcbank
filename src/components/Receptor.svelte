<script>
  import BaseForm from "./BaseForm";
  import Botones from "./Botones";
</script>

<style>

</style>

<div class="Receptor">
  <div class="container">
    <div class="row">
      <div class="col my-auto">
        <form>
          <BaseForm />

          <div class="form-row">
            <div class="col-2 my-auto">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="account1"
                  value="corriente" />
                <label class="form-check-label" for="account1">Corriente</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="account2"
                  value="ahorro" />
                <label class="form-check-label" for="account2">Ahorro</label>
              </div>
            </div>

            <div class="col-4">
              <label for="bank">Banco</label>
              <select id="bank" class="form-control">
                <option selected>Elija...</option>
                <option>Provincial</option>
                <option>Banesco</option>
                <option>BOD</option>
              </select>
            </div>
            <div class="col-6">
              <label for="id">Número de Cuenta</label>
              <input
                type="number"
                class="form-control"
                id="account"
                aria-describedby="accountHelp" />
            </div>
          </div>
          <Botones />
        </form>
      </div>
    </div>
  </div>
</div>
