<script>
  import { usuario } from "../store/store";
  import { mostrarl } from "../store/store";

  let nombre = "";
  let clave = "";
  let n;
  let p;

  const validacion = usuario.subscribe(value => {
    n = value.us;
    p = value.pass;
  });
</script>

<div class="mx-auto">
  <form class="border border-light rounded p-3">
    <div class="form-group text-light">
      <label for="name">Usuario</label>
      <input
        type="text"
        class="form-control"
        id="name"
        bind:value={nombre}
        placeholder="Usuario"
        aria-describedby="nameHelp" />
      <label for="pass">Clave</label>
      <input
        type="password"
        class="form-control"
        id="pass"
        bind:value={clave}
        aria-describedby="idHelp" />
    </div>
    <div class="row">
      <div class="mx-auto">
        <button
          on:click={{ nombre }.nombre == n && { clave }.clave == p ? mostrarl.update(n => 3) : alert('Datos errados, rectifica por favor')}
          class="btn btn-outline-light">
          Entrar
        </button>
      </div>
    </div>
  </form>
</div>
