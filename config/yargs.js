const { describe } = require('yargs');

const argv = require('yargs')
                .option ('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option ('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                    
                })
                .option ('h', {
                    alias: 'hasta',
                    default: 10,
                    type: 'number',
                    describe: 'Imprime la tabla esta cantidad de veces'
                })
                    
                .check((argv, option) => {
                if( isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'
                    }
                    return true
                })
                .argv;

module.exports = argv;