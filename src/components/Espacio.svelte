<script>
  import { onMount } from "svelte";
  import { bandera } from "../store/store.js";

  import Principal from "./Principal.svelte";
  import Cliente from "./Cliente.svelte";
  import Receptor from "./Receptor.svelte";
  import Proveedor from "./Proveedor.svelte";
  import Portal from "./Portal.svelte";
  import Operador from "./Operador.svelte";

  import Arbitraje from "./Arbitraje.svelte";
  import Remesas from "./Remesas.svelte";

  let bander;

  onMount(async () => {
    const establecerForm = bandera.subscribe(value => {
      bander = value;
      if (!bander) {
        bander = "Principal";
      }
    });
  });
</script>

<style>

</style>

<div class="Espacio">
  <div class="bg-secondary">
    <h3 class="text-center">Espacio</h3>
    {#if bander === 'Principal'}
      <Principal />
      {:else if bander === 'Cliente'}
      <Cliente />
    {/if}
  </div>
</div>
