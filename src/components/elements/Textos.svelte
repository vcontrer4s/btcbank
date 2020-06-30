<script>
  let v;
  let mensaje;
  let text;
  let letras = " abcdefghijklmnñopqrstuvwxyzáéíóú";
  let l = letras.split("");
  export let min = 3;
  export let max = 25;

  function validarCaracteres(txt) {
    let t = txt.value.split("");
    for (let j = 0; j < t.length; j++) {
      let encontrado = l.indexOf(t[j]);
      if (encontrado != -1) {
        v = " is-valid";
      } else {
        if (encontrado < 0) {
          mensaje = mensajes[2];
          v = " is-invalid";
          txt.focus();
          break;
        }
      }
    }
  }
  function validarLength(text, txt) {
    if (!text) {
      v = " is-invalid";
      txt.focus();
      mensaje = mensajes[0];
    } else if (text.length < min) {
      v = " is-invalid";
      txt.focus();
      mensaje = mensajes[1];
    } else {
      validarCaracteres(txt);
    }
  }
  const mensajes = [
    "Por favor completa este campo",
    "Por favor incluye mínimo 3 letras",
    "Por favor solo incluye letras"
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
  bind:value={text}
  on:blur={validarLength(text, this)} />
<div class="invalid-feedback">{mensaje}</div>
