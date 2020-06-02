<script>
  import { onMount } from "svelte";
  import { bandera } from "../store/store.js";

  function mostrarForm(nueva) {
    bandera.update(n => nueva + 1);
    console.log(nueva);
  }

  const opcionesR = [
    { registrar: "Cliente" },
    { registrar: "Receptor" },
    { registrar: "Proveedor" },
    { registrar: "Portal" },
    { registrar: "Operador" }
  ];

  const opcionesP = [{ procesar: "Arbitraje" }, { procesar: "Remesas" }];
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
        {#each opcionesR as { registrar }, i}
          <a on:click={() => mostrarForm(i)} class="dropdown-item" href="#">
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
        {#each opcionesP as { procesar }, i}
          <a on:click={() => mostrarForm(i+5)} class="dropdown-item" href="#">
            {procesar}
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>
