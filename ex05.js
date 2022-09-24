import {promises as fs} from 'fs';

async function getDadaJson(){ 

try{
  const data = JSON.parse(await fs.readFile('./estados-cidades-atividade.json'));
  return data;
} catch(error)  {  
console.log('Houve um erro:', error);
}
}

//5.Criar uma função que liste os nomes de todas as cidades do estado de São Paulo.

async function listarCidadeSp(){
  const dados = await getDadaJson();
   const sp = dados.filter((estadoSp)=>{
     return estadoSp.nome === 'São Paulo';
})

const cidadeSp = sp.map((cidade)=>{
  return  {cidades: cidade.cidades}
})
console.log(cidadeSp)

}
listarCidadeSp();
