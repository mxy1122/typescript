let estudianteJava: boolean = false

if (estudianteJava) {
    console.log("estudiante java")
}else{
    console.log("no estudiante java")
}



let interMiami: number = 11
let fcDallas: number = 10
let messi: number = 1
let juegaMessi: boolean = true

function jugar(equipo1: number, equipo2: number, juegaMessi: boolean): void {
    let motivo: string = ''
    if(juegaMessi){
        equipo1 += messi
        motivo = 'porque juega messi'
    }
    if(equipo1 > equipo2)console.log("Gano el equipo 1")
    if(equipo1 < equipo2)console.log("Gano el equipo 2")
    if(equipo1 === equipo2)console.log("Empate")
}

jugar(interMiami, fcDallas,juegaMessi)

let disney: any;

disney = "Pixar"
console.log(disney)

disney = 1000000000
console.log(disney)

disney = true
console.log(disney)