import {promises as fs} from 'fs';

async function getDadaJson(){ 

try{
  const data = JSON.parse(await fs.readFile('./estados-cidades-atividade.json'));
  return data;
} catch(error)  {  
console.log('Houve um erro:', error);
}
}

//7. Criar uma função que informe o nome dos estados e quantas cidades cada um deles
//posui.
async function listarQuantidadeCidades(){
    const dados = await getDadaJson();
    const estadosCidades = dados.map((quant)=>{
      return{
        estado: quant.nome,
        cidades: quant.cidades.length
      }
    })
    console.log(estadosCidades)
}

listarQuantidadeCidades();
