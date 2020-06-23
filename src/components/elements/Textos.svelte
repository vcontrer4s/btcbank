<script>
  let v;
  let mensaje;
  let txt;
  let letras = " abcdefghijklmnñopqrstuvwxyzáéíóú";
  let l = letras.split("");
  export let min = 3;
  export let max = 15;

  function validart(n, t) {
    if (!n || n.length < min) {
      console.log(n);
      v = " is-invalid";
      t.value = "";
      t.focus();
      mensaje = mensajes[0];
    } else if (n.length > max) {
      console.log(n);
      v = " is-invalid";
      t.value = "";
      t.focus();
      mensaje = mensajes[1];
    } else {
      let t = txt.split("");
      console.log(n);
      //do while
      for (let i = 0; i < l.length; i++) {
        for (let j = 0; j < t.length; j++) {
          if (t[j] == l[i]) {
            console.log("encontrado", t[j], l[i]);
          } else {
            v = " is-invalid";
            console.log("t", t[j], "j", l[i]);
            break;
          }
        }
      }
    }
  }
  const mensajes = [
    "Este campo es necesario",
    "Por favor verifica este campo",
    "No puedes incluir números"
  ];
</script>

<input
  type="text"
  class="form-control {v}"
  id="name"
  aria-describedby="nameHelp"
  required
  autocomplete="off"
  maxlength={max}
  minlength={min}
  bind:value={txt}
  on:blur={validart(txt, this)} />
<div class="invalid-feedback">{mensaje}</div>
