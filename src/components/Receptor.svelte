<style>

</style>

<div class="Receptor">
  <div class="container">
    <div class="row">
      <div class="col my-auto">
        <form>
          <div class="form-group">
            <div class="form-group">
              <label for="nameclient">Nombre del Cliente</label>
              <select id="nameclient" class="form-control">
                <option selected>Elija...</option>
                <option>Miguel</option>
                <option>Oliver</option>
                <option>Ramón</option>
              </select>
            </div>

            <label for="id">Cédula del Receptor</label>
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

            <label for="email">Dirección</label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp" />

            <div class="form-group">
              <label for="email">Teléfono</label>
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

              <label for="country">Pais</label>
              <select id="country" class="form-control">
                <option selected>Elija...</option>
                <option>Chile</option>
                <option>Colombia</option>
                <option>Perú</option>
              </select>

              <label for="bank">Banco</label>
                <select id="bank" class="form-control">
                  <option selected>Elija...</option>
                  <option>Provincial</option>
                  <option>Banesco</option>
                  <option>BOD</option>
                </select>

                <label for="id">Número de Cuenta</label>
                <input
                  type="number"
                  class="form-control"
                  id="account"
                  aria-describedby="accountHelp" />

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="account1"
                    value="corriente" />
                  <label class="form-check-label" for="account1">
                    Corriente
                  </label>
                
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="account2"
                    value="ahorro" />
                  <label class="form-check-label" for="account2">Ahorro</label>
                </div>
                <br />
              </div>
            </div>
            <button type="submit" class="btn btn-outline-light">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
