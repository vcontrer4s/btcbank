<script>
  import { onMount } from "svelte";
  import { bandera } from "../store/store.js";

  function mostrarForm(nueva) {
    bandera.update(n => nueva + 1);
    console.log(nueva)
  }

  const opciones = [
    { registrar: "Cliente"},
    { registrar: "Receptor"},
    { registrar: "Proveedor"},
    { registrar: "Portal"},
    { registrar: "Operador"}
  ];
</script>

<style>

</style>

<div class="Menu">
  <div class="bg-secondary">
    <h3 class="text-center">Menu</h3>
    <div class="btn-group-vertical btn-block">
      <button
        id="menuRegistrar"
        type="button"
        class="btn btn-secondary dropdown-toggle-middle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Registrar
      </button>
      <div class="dropdown-menu" aria-labelledby="menuRegistro">
        {#each opciones as { registrar }, i}
          <a
            on:click={() => mostrarForm( i )}
            class="dropdown-item"
            href="#">
            {registrar}
          </a>
        {/each}
      </div>
    </div>
    <div class="btn-group-vertical btn-block">
      <button
        id="menuRegistrar"
        type="button"
        class="btn btn-secondary dropdown-toggle-middle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Procesar
      </button>
      <div class="dropdown-menu" aria-labelledby="menuRegistro">
        <a class="dropdown-item" href="#">Arbitraje</a>
        <a class="dropdown-item" href="#">Remesas</a>
      </div>
    </div>
  </div>
</div>
