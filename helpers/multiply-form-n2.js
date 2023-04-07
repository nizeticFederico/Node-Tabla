const fs = require('fs');
const colors = require('colors')
const crearArchivo = async (base = 5, l = false, h = 10) => {
   
        try {
            
        let salida = '';
        let consola = '';
            
        for (let i = 1; i <= h; i++) {
       
        salida += (`${base} x ${i} = ${base*i}\n`);
        consola += (`${base} ${'x'.red} ${i} ${'='.yellow} ${base*i}\n`);
        
    
    }
        if (l) {
            console.log (colors.white('======================='));
            console.log(colors.red('     Tabla del', base ));
            console.log(colors.white('======================='));
            console.log(consola); 
        }
        
            
            
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
        
        
        
        
        } catch (error) {
            return error
        }
        
}  
    
    


module.exports = {
    crearArchivo
} 