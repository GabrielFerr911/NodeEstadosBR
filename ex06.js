import {promises as fs} from 'fs';

async function getDadaJson(){ 

try{
  const data = JSON.parse(await fs.readFile('./estados-cidades-atividade.json'));
  return data;
} catch(error)  {  
console.log('Houve um erro:', error);
}
}

//6. Criar uma função que liste o nome de todas as cidades do Maranhão com mais de 6
//letras.

async function listarCidadesMH(){
    const dados = await getDadaJson();
     const maranhão = dados.find((estadoMh)=>{
       return estadoMh.nome === 'Maranhão';
  })

  const cidade = maranhão.cidades

  const cidades = cidade.filter((cidadesMh)=>{
    return cidadesMh.length > 6
  })
  
  cidades.forEach((exibir)=>{
    console.log(exibir)
  })


}
listarCidadesMH()