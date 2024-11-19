// Arrays
let arreglo: any[] = [1, 'holal', 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let arreglo2: string[] = ['html', 'css', 'js'];

arreglo2[0].indexOf('html');


// Objetos
let programador = {
    nombre : 'jose',
    apellido : 'perez',
    trabajos:['programador','desarrollador']
}

programador = {
    nombre : 'jorge',
    apellido : 'carlos',
    trabajos:['estudiante','desarrollador']
}

console.log(programador);

// Tipos
type Programador = {
    nombre : string,
    apellido : string,
    trabajos : string[]
}

let programador2 : Programador = {
    nombre : 'roberto',
    apellido : 'carlos',
    trabajos : ['desarrollador']
}