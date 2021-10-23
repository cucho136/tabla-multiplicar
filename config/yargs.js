const argv =require('yargs')
    .option('b',{
        alias:'base',
        type: 'number',
        demandOption: true,
        describe:'toma la base de la tabla de multiplicar'
    })
    .option('l',{
        alias:'listar',
        type: 'boolean',
        default: false,
        describe: 'indica al usuario si desea imprimir la tabla'
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        default:10,
        describe: 'Indica hasta que numero multiplicar'
    })
    .check((argv,option) => {
        if (isNaN(argv.b)){
            throw 'la base debe ser un numero';
        }
        return true;
    })
    .argv;


module.exports = argv;
