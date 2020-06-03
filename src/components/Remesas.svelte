<script>
  import Botones from "./Botones";

  let f = new Date();
  let calc = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
</script>

<style>
  .nombres {
    font-size: 1.5rem;
  }
</style>

<div class="Remesas">
  <div class="container">
    <div class="row">
      <div class="col my-auto">

        <form>
          <div class="form-row">
            <div class="form-group col-4">
              <label for="rate">Tasa</label>
              <input
                disabled
                type="number"
                class="form-control"
                id="rate"
                aria-describedby="rateHelp" />
            </div>
            <div class="form-group col-4">
              <label for="date">Fecha</label>
              <input
              disabled
                value={calc}
                type="text"
                class="form-control"
                id="date"
                aria-describedby="dateHelp" />
            </div>
            <div class="form-group col-4">
              <label for="operator">Operador</label>
              <input
                disabled
                type="number"
                class="form-control"
                id="operator"
                aria-describedby="operatorHelp" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-6">
              <label for="idcli">Cédula Cliente</label>
              <input
                type="number"
                class="form-control"
                id="idcli"
                aria-describedby="idCliHelp" />
            </div>
            <div class="form-group col-6">
              <label for="idRecep">Cédula Receptor</label>
              <input
                type="number"
                class="form-control"
                id="idRecep"
                aria-describedby="idRecepHelp" />
            </div>
          </div>
          <div class="form-row nombres">
            <div class="col-6">
              <label for="nameCli">Pedro Perez</label>
            </div>
            <div class="col-6">
              <label for="nameRecep">Maria Briceño</label>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-6">
              <label for="amount">Monto</label>
              <input
                type="number"
                class="form-control"
                id="amount"
                aria-describedby="amountHelp" />
            </div>
            <div class="form-group col-6">
              <label for="fiat">Divisas</label>
              <select id="district" class="form-control">
                <option selected>Elija...</option>
                <option>CLP/VES</option>
                <option>ARS/VES</option>
                <option>COP/VES</option>
                <option>PEN/VES</option>
              </select>
            </div>
          </div>
          <div class="form-group col-6">
              <label for="transfer">Número de Transferencia**</label>
              <input
                type="number"
                class="form-control"
                id="transfer"
                aria-describedby="transferHelp" />
            </div>
          <Botones />
        </form>
      </div>
    </div>
  </div>
</div>
