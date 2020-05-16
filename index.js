const crypto = require('crypto');
const fs = require('fs');
const ans = require('./answer.json');
const letters = [
    'a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
    'a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
]

let answer = JSON.parse(JSON.stringify(ans));

if(answer.cifrado.trim()){
    const { length } = answer.cifrado.trim();
    const { cifrado, numero_casas: casas } = answer;
    let decifrado = '';
    for(let count = 0; count < length; count += 1){
        decifrado += letters.lastIndexOf(cifrado[count]) < 0 ? cifrado[count] : letters[letters.lastIndexOf(cifrado[count]) -  casas] ;
    }

    answer.decifrado = decifrado;
    answer.resumo_criptografico = crypto.createHash('sha1').update(decifrado).digest('hex');
}




fs.writeFileSync('answer.json', JSON.stringify(answer));