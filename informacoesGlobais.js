const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/dados-globais.js'
console.log(url);

async function visualizarInformacoesGlobais (){

    const dados = await res.json();
    const pessoasConectadas = (dados.total_pessoas_concetadas) / 1e9
    const pessoasMundo = (dados.total_pessoas_mundo)/1e9
    const horas = parseInt (dados.tempo_medio)
    const minutos = Math.round ((dados.tempo_medio - horas)* 100)
    const porcentagemConectada =  ((pessoasConectadas / pessoasMundo)*100).toFixed(2)
    const paragrafos = document.createElement('p')
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML = `você sabia que o mundo tem 
<span>${dados.total_pessoas_mundo}</span> de pessoas e 
que aproxmadamente <span>${dados.total_pessoas_concetadas}</span>
estão conectadas em alguma rede social e passam em media
<span>${dados.tempo_medio}</span> horas conectadas.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
    console.log(dados.tempo_medio)
}
visualizarInformacoesGlobais()
{
    "total_pessoas_conectadas"; 5.04e9,
    "total_medio"; 2.38,
    "total_pessoas_mundo"; 7.888e9
}