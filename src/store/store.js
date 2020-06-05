import { writable } from 'svelte/store';

export const bandera = writable(0);
export const mostrarl = writable(0);

export const usuario = writable({
    us: "victor",
    pass: "Vim123"
})
