
import { Cliente } from './cliente.js';

//exportar variables
export const nombreEmpresa = 'Udemy';
export let ahorro = 14500000;
export const categoria = 'Aprendizaje'

//exportar funciones
export function mostrarInformacion(nombre, ahorro){
    return `Empresa: ${nombre}, ahorro: ${ahorro}, categoria: ${categoria}`
}

export function mostrarNombre(nombre){
    return `Nombre del cliente: ${nombre}`;
}
 
export class Empresa extends Cliente{
       constructor(nombre, ahorro, categoria){
           super(nombre, ahorro);
           this.categoria = categoria;
       }
       mostrarInformacion(nombre, ahorro){
    return `Empresa: ${nombre}, ahorro: ${ahorro}, categoria: ${categoria}`
   }
}

