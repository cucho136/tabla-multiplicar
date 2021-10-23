

const fs = require('fs');
const colors= require('colors');


const crearArchivo = async (base = 5 , limitar= false, hasta=10) => {
    try{




        let salida ='';
        let consola=''

        for (let i = 1; i < hasta+1; i++) {
            salida+= `${i} x ${base} = ${i*base}\n`;
            consola+= `${i} ${`x`.green} ${base} ${`=`.green} ${i*base}\n`;
        }
        if (limitar){
            console.log('=========================='.green);
            console.log('   Tabla del:'.green, colors.blue(base));
            console.log('=========================='.green);
            console.log(consola);
        }

        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        
        return `tabla-${base}.txt`;
    }catch (err){
        throw err;

    }
        

}

module.exports = {
    crearArchivo
}