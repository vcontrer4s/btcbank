<script>
  import Barra from "../components/Barra.svelte";
  import Menu from "../components/Menu.svelte";
  import Indicadores from "../components/Indicadores.svelte";
  import Espacio from "../components/Espacio.svelte";

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
      <div class="col-3 p-0">
        <Menu />
      </div>
      <div class="col-6 p-0">
        <Espacio />
      </div>
      <div class="col-3 p-0">
        <Indicadores />
      </div>
    </div>
  </div>
</div>
