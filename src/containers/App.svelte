<script>
  import { mostrarl } from "../store/store";

  import Barra from "../components/Barra.svelte";
  import Menu from "../components/Menu.svelte";
  import Indicadores from "../components/Indicadores.svelte";
  import Espacio from "../components/Espacio.svelte";
  import Principal from "../components/Principal.svelte";
  import Acceder from "../components/Acceder.svelte";
  import Alt from "../components/Alt.svelte";

  let comp;

  const establecerForm = mostrarl.subscribe(value => {
    if (value == 0) {
      comp = Principal;
    } else if (value == 1) {
      comp = Acceder;
    } else {
      comp = Alt;
    }
  });
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

  :global(body) {
    background-color: #212529;
    font-family: "Lato" sans-serif;
    margin: 0;
    padding: 0;
  }
  :global(img) {
    width: 100%;
  }

  .margen {
    margin-top: 3.6em;
  }
</style>

<Barra />
<div class="margen">
  <div class="container">
    <div class="row">
      <svelte:component this={comp} />
      <!-- <svelte:component this={Alt} /> -->
    </div>
  </div>
</div>
