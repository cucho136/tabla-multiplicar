const { crearArchivo } = require('./helpers/multiplicr');
const argv =require('./config/yargs');
const colors= require('colors');
            

console.clear();



//console.log(process.argv);
//console.log(argv);



/* const [ , , argv3='base=5'] = process.argv ;
const [ ,base=5] =argv3.split('=')

console.log(base); */


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo=> console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err));