<script>
    import Menu from '../components/Menu.svelte';
    import Contenido from '../components/Contenido.svelte';

</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

    :global(body) {
        background-color: #212529;
        font-family: "Lato" sans-serif;
        margin: 0;
        padding: 0;
    }
    :global(img) {
        width: 100%; 
    }

</style>

<Menu />
<Contenido />

