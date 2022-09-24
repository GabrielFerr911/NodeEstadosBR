import {promises as fs} from 'fs';

async function getDadaJson(){ 

try{
  const data = JSON.parse(await fs.readFile('./estados-cidades-atividade.json'));
  return data;
} catch(error)  {  
console.log('Houve um erro:', error);
}
}

//8. Crie uma função que liste todas as cidades do estado da Bahia que tenha menos de cinco letras

async function listarCidadesBA(){
    const dados = await getDadaJson();
     const bahia = dados.find((estadoBA)=>{
       return estadoBA.nome === 'Bahia';
  })

  const cidadesBA = bahia.cidades

  const menores = cidadesBA.filter((cidades)=>{
    return cidades.length < 5
  })
  
  menores.forEach((exibir)=>{
    console.log(exibir)
  })


}
listarCidadesBA()