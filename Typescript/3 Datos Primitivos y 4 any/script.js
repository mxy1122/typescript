"use strict";
let estudianteJava = false;
if (estudianteJava) {
    console.log("estudiante java");
}
else {
    console.log("no estudiante java");
}
let interMiami = 11;
let fcDallas = 10;
let messi = 1;
let juegaMessi = true;
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = '';
    if (juegaMessi) {
        equipo1 += messi;
        motivo = 'porque juega messi';
    }
    if (equipo1 > equipo2)
        console.log("Gano el equipo 1");
    if (equipo1 < equipo2)
        console.log("Gano el equipo 2");
    if (equipo1 === equipo2)
        console.log("Empate");
}
jugar(interMiami, fcDallas, juegaMessi);
let disney;
disney = "Pixar";
console.log(disney);
disney = 1000000000;
console.log(disney);
disney = true;
console.log(disney);
