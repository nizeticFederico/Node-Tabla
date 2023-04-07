
const fs = require('fs');
const crearArchivo = (base = 5, l = false ) => {
    return new Promise ((resolve, reject) => {
        
        
        let salida = '';
    
        for (let i = 1; i <= 10; i++) {
       
        salida += (`${base} X ${i} = ${base*i}\n`);
        
    
    }
        if (l){
            console.log('=======================');
            console.log('       Tabla del', base );
            console.log('=======================');
            console.log(salida);
        }else {

            (salida)
                ? resolve(`tabla-${base}.txt`)
                : reject('No se pudo crear el archivo')
        }
            
        


            
    

    fs.writeFileSync(`tabla-${base}.txt`, salida);
    

     
    
    })
}

module.exports = {
    crearArchivo
} 

    



