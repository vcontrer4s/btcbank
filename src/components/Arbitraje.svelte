<script>
  import Botones from "./Botones";
</script>

<style>

</style>

<div class="Arbitraje">
  <div class="container">
    <div class="row">
      <div class="col my-auto">
        <form>
          <div class="form-row">
            <div class="form-group col-6">
              <label for="type">Tipo de operación</label>
              <select id="type" class="form-control">
                <option selected>Compra</option>
                <option>Venta</option>
              </select>
            </div>
            <div class="form-group col-6">
              <label for="idTrader">Trader</label>
              <select id="idTrader" class="form-control">
                <option selected>Ramon123</option>
                <option>Pedro321</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-6">
              <label for="currency">Divisa que recibe</label>
              <select id="currency" class="form-control">
                <option selected>BTC</option>
                <option>CLP</option>
                <option>ARS</option>
                <option>COP</option>
                <option>PEN</option>
              </select>
            </div>
            <div class="col-6">
              <label for="currencys">Divisa que envia</label>
              <select id="currencys" class="form-control">
                <option selected>BTC</option>
                <option>CLP</option>
                <option>ARS</option>
                <option>COP</option>
                <option>PEN</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-6">
              <label for="rate">Tasa/Precio</label>
              <input
                type="number"
                class="form-control"
                id="rate"
                aria-describedby="rateHelp" />
            </div>
            <div class="form-group col-6">
              <label for="quantity">Cantidad</label>
              <input
                disabled
                type="number"
                class="form-control"
                id="quantity"
                aria-describedby="quantityHelp" />
            </div>
          </div>
          <Botones />
        </form>
      </div>
    </div>
  </div>
</div>
