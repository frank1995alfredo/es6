
//eportar variables
export const nombreCliente = 'Juan';
export let ahorro = 2000;

//exportar funciones
export function mostrarInformacion(nombre, ahorro){
    return `Cliente: ${nombre}, ahorro: ${ahorro}`
}

export function mostrarNombre(nombre){
    return `Nombre del cliente: ${nombre}`;
}

//exportar clases

export class Cliente{
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }
    mostrarInformacion(nombre, ahorro){
        return `Cliente: ${this.nombre}, ahorro: ${this.ahorro}`;
    }
    
}



