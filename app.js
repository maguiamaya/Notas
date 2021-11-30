const process = require('process');
const {listar,crear,filtrar,deshacer} = require('./funcionesDeTareas');
let accion = process.argv[2];

switch (accion) {
    case undefined :
        console.log('Comando vacio. Ejecute una accion: >listar , >crear , >filtrar,>deshacer')
        break;
    case 'listar':
        return  listar()
       break;
    case 'crear':
        crear(process.argv[3],process.argv[4])
       return listar()
        break;
        case 'filtrar':
            filtrar(process.argv[3])
            break;
        case 'deshacer':
            deshacer(process.argv[3]);
            return listar()
            break
    default:
        console.log('solo es posible ejecutar las acciones: >listar , >crear , >filtrar,>deshacer')
        break;
}; 




