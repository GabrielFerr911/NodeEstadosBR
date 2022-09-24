import {promises as fs} from 'fs';

async function getDadaJson(){ 

try{
  const data = JSON.parse(await fs.readFile('./estados-cidades-atividade.json'));
  return data;
} catch(error)  {  
console.log('Houve um erro:', error);
}
}

//4. Criar uma função que liste todos os nomes dos estados ordenados primeiramente por
//qual estado tem menos letras.

async function listarEstadosMin(){
  const dados = await getDadaJson();
  const estadosA = dados.map((estado)=>{
    return {estado: estado.nome}
  })
  const ordenados = estadosA.sort((menor1,menor2)=>{
      return menor1.estado.length - menor2.estado.length;
     })
  
  console.log(ordenados)
}
listarEstadosMin();