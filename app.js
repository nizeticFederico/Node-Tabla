const { crearArchivo }  = require ('./helpers/multiply-form-n2')
const argv = require('./config/yargs');
const colors = require('colors')

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
      .then (nombreArchivo => console.log(colors.rainbow(nombreArchivo, 'creado')))
      .catch(err => console.log(err));


// console.log(process.argv);
// console.log(argv)
// console.log('base: yargs', argv.base);
   


     //console.log(process.argv);

// const [ , ,arg3= 'base=5'] = process.argv;
// const [ , base=5] = arg3.split('=')
// console.log( base );