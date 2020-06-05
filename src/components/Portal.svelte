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

          <div class="form-group">
            <label for="region">Paises donde opera</label>
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="countryVen"
                value="Ven" />
              <label class="form-check-label" for="countryVen">Ven</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="countryCol"
                value="Col" />
              <label class="form-check-label" for="countryCol">Col</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="countryEcu"
                value="Ecu" />
              <label class="form-check-label" for="countryEcu">Ecu</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="countryPer"
                value="Per" />
              <label class="form-check-label" for="countryPer">Per</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="countryCl"
                value="Cl" />
              <label class="form-check-label" for="countryCl">Cl</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="countryAr"
                value="Ar" />
              <label class="form-check-label" for="countryAr">Ar</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="countryBr"
                value="Br" />
              <label class="form-check-label" for="countryBr">Br</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="countryBol"
                value="Bol" />
              <label class="form-check-label" for="countryBol">Bol</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="countryMx"
                value="Mx" />
              <label class="form-check-label" for="countryMx">Mx</label>
            </div>
          </div>

          <div class="form-group col-4">
            <label for="comision">Comisión</label>
            <input
              type="number"
              class="form-control"
              id="comision"
              aria-describedby="comisionHelp" />
          </div>
          <Botones />
        </form>
      </div>
    </div>
  </div>
</div>
