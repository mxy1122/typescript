"use strict";
let dev = {
    nombre: 'jose',
    apellido: 'perez',
    trabajos: ['programador', 'desarrollador']
};
let dev2 = {
    nombre: 'jorge',
    apellido: 'carlos',
    trabajos: ['estudiante', 'desarrollador']
};
function enviarCurriculum(programador) {
    console.log('Este curriculum es de este programador ${programador.apellido}');
}
enviarCurriculum(dev);
// Clases
class Pelicula {
    proyectarEnCine() {
        console.log('Proyectando la pelicula ${this.nombre}');
    }
    constructor(nombre, director, protagonistas, actores) {
        this.nombre = nombre;
        this.director = director;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
}
const pelicula = new Pelicula('pelicula1', 'director1', ['protagonista1', 'protagonista2'], ['actor1', 'actor2']);
const pelicula2 = new Pelicula('pelicula2', 'director2', ['protagonista3', 'protagonista4'], ['actor3', 'actor4']);
pelicula.proyectarEnCine();
console.log(pelicula2);
// Encapsulamiento
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    sorter() {
        return 'Para el sorteo ${this.ticket} es para ${this.nombre}';
    }
}
let sorteo = new Sorteo('jose');
sorteo.setTicket('ticket 5');
console.log(sorteo.sorter());
