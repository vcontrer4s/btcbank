<script>
  import { onMount } from "svelte";
  import { bandera } from "../store/store.js";

  function mostrarForm(nueva) {
    bandera.update(n => nueva);
  }
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
        <a
          on:click={() => mostrarForm('Cliente')}
          class="dropdown-item"
          href="#">
          Cliente
        </a>
        <a
          on:click={() => mostrarForm('Receptor')}
          class="dropdown-item"
          href="#">
          Receptor
        </a>
        <a
          on:click={() => mostrarForm('Proveedor')}
          class="dropdown-item"
          href="#">
          Proveedor
        </a>
        <a
          on:click={() => mostrarForm('Portal')}
          class="dropdown-item"
          href="#">
          Portal
        </a>
        <a
          on:click={() => mostrarForm('Operador')}
          class="dropdown-item"
          href="#">
          Operador
        </a>
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
