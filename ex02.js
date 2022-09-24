import {promises as fs} from 'fs';

async function getDadaJson(){ 

try{
  const data = JSON.parse(await fs.readFile('./estados-cidades-atividade.json'));
  return data;
} catch(error)  {  
console.log('Houve um erro:', error);
}
}
//Criar uma função que liste o nome de todos os estados salvos no arquivo
async function listarEstados(){
  const dados = await getDadaJson();
  const estados = dados.map((estado)=>{
    return{
      nome: estado.nome
    }
  })
  console.log(estados)
}
listarEstados();