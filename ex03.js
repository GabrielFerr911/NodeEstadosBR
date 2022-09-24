import {promises as fs} from 'fs';

async function getDadaJson(){ 

try{
  const data = JSON.parse(await fs.readFile('./estados-cidades-atividade.json'));
  return data;
} catch(error)  {  
console.log('Houve um erro:', error);
}
}

//3. Criar uma função que liste o nome de todos os estados inciados com a letra A salvos no
//arquivo.

async function listarEstadosA(){
    const dados = await getDadaJson();
    const estadosA = dados.map((estado)=>{
      if(estado.nome.startsWith("A")){
        console.log(estado.nome)
      }
    })

}
listarEstadosA();