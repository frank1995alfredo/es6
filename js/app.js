
import { nombreCliente, ahorro, mostrarInformacion,
     mostrarNombre, Cliente } from './cliente.js';
import { nombreEmpresa, ahorro as ahorroEmpresa, Empresa, categoria } from './empresa.js';

console.log(nombreCliente);
console.log(ahorro);
//console.log(ahorro);

const info = mostrarInformacion('Franklin', 2500);
console.log(info);

const cliente = mostrarNombre('Alfredo');
console.log(cliente);

//utilizar la clase
let client = new Cliente(nombreCliente, ahorro);
console.log(client.mostrarInformacion());

let empresa = new Empresa(nombreEmpresa, ahorroEmpresa, categoria);
console.log(empresa.mostrarInformacion());

//empresa
console.log(nombreEmpresa, ahorroEmpresa);