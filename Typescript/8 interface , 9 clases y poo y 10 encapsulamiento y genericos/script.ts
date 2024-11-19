// Interfaces
type Programador2 = {
    nombre : string,
    apellido : string,
    trabajos : string[]
}

let dev: Programador2 = {
    nombre : 'jose',
    apellido : 'perez',
    trabajos : ['programador','desarrollador']
}

let dev2: Programador2 = {
    nombre : 'jorge',
    apellido : 'carlos',
    trabajos : ['estudiante','desarrollador']
}

function enviarCurriculum( programador: Programador2 ) {

    console.log('Este curriculum es de este programador ${programador.apellido}');

}

enviarCurriculum(dev);

// Clases
class Pelicula{
    nombre?: string;
    director?: string;
    protagonistas?: string[];
    actores?: string[];

    proyectarEnCine(){
        console.log('Proyectando la pelicula ${this.nombre}');
    }

    constructor(nombre: string, director: string, protagonistas: string[], actores: string[]) {
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

class Sorteo<T>{
    
    private ticket?:T;

    constructor(
        private nombre: string
    
    ){ }

    setTicket(ticket:T){
        this.ticket = ticket;
    }

    getTicket(){
        return this.ticket;
    }

    public sorter(): string{
        return 'Para el sorteo ${this.ticket} es para ${this.nombre}';
    }
}

let sorteo = new Sorteo<string>('jose');
sorteo.setTicket('ticket 5');
console.log(sorteo.sorter());