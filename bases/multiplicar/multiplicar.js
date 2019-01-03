const fs = require('fs')
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    if(!Number(base) || !Number(limite)){
        return reject(`Uno o ambos valores en base/limite no son numericos!`)
    }

    let data = '';
    for(let i=1; i<=limite; i++){
        console.log(`${base} * ${i} = ${base*i}`.green)
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolv, reject)=>{

        if(!Number(base)){
            return reject(`El valor en base "${base}", no es un numero!`)
        }

        let data = '';
        for(let i=1; i<=limite; i++){
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolv(`tabla-${base}.txt`)
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}
