// Elementos da página
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");
const caixaResultado = document.querySelector(".caixa-resultado");
const botaoRecomecar = document.querySelector(".botao-recomecar");
const emblemasClubes = document.querySelector("#emblemas-clubes");
const imagemTime = document.querySelector("#imagem-time");
const fotoRonaldinho = document.querySelector("#foto-ronaldinho");

// Clubes e seleções onde Ronaldinho jogou com imagens
const clubes = [
    { 
        nome: "Seleção Brasileira", 
        periodo: "1999-2013", 
        imagem: "https://i.pinimg.com/originals/22/2b/67/222b67e6a519a19048a7f29fe451d864.jpg",
        emblema: "https://logodetimes.com/times/selecao-brasileira-brasil-novo-logo-2019-com-estrelas-e-nome/logo-selecao-brasileira-brasil-novo-logo-2019-com-estrelas-e-nome-4096.png"
    },
    { 
        nome: "Grêmio", 
        periodo: "1998-2001", 
        imagem: "https://tntsports.com.br/export/sites/esporteinterativo/img/2019/10/12/image_1.png_123944745.png",
        emblema: "https://i.pinimg.com/originals/6e/56/85/6e56855acd4f61251a9717eb594b0ee7.png"
    },
    { 
        nome: "PSG", 
        periodo: "2001-2003", 
        imagem: "https://tse3.mm.bing.net/th/id/OIP.A90BdgiPuUe2cB8r1mYGPwHaFN?pid=Api&P=0&h=180",
        emblema: "https://logodownload.org/wp-content/uploads/2017/02/psg-logo-escudo-paris-saint-germain.png"
    },
    { 
        nome: "Barcelona", 
        periodo: "2003-2008", 
        imagem: "https://www.fcbarcelona.com/fcbarcelona/photo/2018/06/08/be58971d-71c5-4f73-b557-1c7456bdd96c/mfWBudvZ.jpg",
        emblema: "https://logosmarcas.net/wp-content/uploads/2020/04/Barcelona-Logo.png"
    },
    { 
        nome: "Milan", 
        periodo: "2008-2011", 
        imagem: "https://calciopedia.com.br/wp-content/uploads/2018/01/ac-milans-brazilian-forward-ronaldinho-scaled.jpeg",
        emblema: "https://logodetimes.com/times/milan/logo-milan-4096.png"
    },
    { 
        nome: "Flamengo", 
        periodo: "2011-2012", 
        imagem: "https://tmssl.akamaized.net/images/foto/galerie/ronaldinho-flamengo-rio-de-janeiro-1592576157-41842.jpg?lm=1592576137",
        emblema: "https://logodownload.org/wp-content/uploads/2016/09/flamengo-logo-0-2048x2048.png"
    },
    { 
        nome: "Atlético-MG", 
        periodo: "2012-2014", 
        imagem: "https://ogimg.infoglobo.com.br/in/13409595-d72-93c/FT1086A/652/2013-629590301-ronaldinho.jpg_20130717.jpg",
        emblema: "https://logodownload.org/wp-content/uploads/2016/10/atletico-mineiro-logo-escudo-.png"
    },
    { 
        nome: "Querétaro", 
        periodo: "2014-2015", 
        imagem: "https://images.mantosdofutebol.com.br/wp-content/uploads/2014/09/Camisas-do-Queretaro-time-mexicano-de-Ronaldinho-Ga%C3%BAcho-2.jpg",
        emblema: "https://logosdown.com/wp-content/uploads/2023/08/queretaro-fc-logo-0-2048x2048-1-300x300.png"
    },
    { 
        nome: "Fluminense", 
        periodo: "2015", 
        imagem: "https://ogimg.infoglobo.com.br/in/17055074-c77-98e/FT1086A/760/2015080105211.jpg-G9R2AKRGP.1.jpg",
        emblema: "https://cdn.freebiesupply.com/logos/large/2x/fluminense-logo-png-transparent.png"
    }
];

// Perguntas do quiz - 9 perguntas (uma para cada clube/seleção)
const perguntas = [
    // Seleção Brasileira
    {
        enunciado: "Quantos gols Ronaldinho fez pela Seleção Brasileira principal?",
        alternativas: [
            { texto: "33 gols", afirmacao: "Correto! Ronaldinho marcou 33 gols em 97 jogos pela seleção principal." },
            { texto: "25 gols", afirmacao: "Errado. Foram 33 gols em 97 jogos." },
            { texto: "40 gols", afirmacao: "Errado. Foram 33 gols pela seleção principal." }
        ],
        timeRelacionado: "Seleção Brasileira"
    },
    // Grêmio
    {
        enunciado: "Quantos títulos Ronaldinho conquistou pelo Grêmio?",
        alternativas: [
            { texto: "3 títulos", afirmacao: "Correto! Ele ganhou Campeonato Gaúcho (1999), Copa Sul (1999) e Copa do Brasil (2001)." },
            { texto: "1 título", afirmacao: "Errado. Foram 3 títulos importantes." },
            { texto: "5 títulos", afirmacao: "Errado. Foram 3 títulos principais." }
        ],
        timeRelacionado: "Grêmio"
    },
    // PSG
    {
        enunciado: "Quantos gols Ronaldinho marcou pelo PSG?",
        alternativas: [
            { texto: "25 gols", afirmacao: "Correto! Ele marcou 25 gols em 86 jogos pelo clube francês." },
            { texto: "15 gols", afirmacao: "Errado. Foram 25 gols pelo PSG." },
            { texto: "35 gols", afirmacao: "Errado. Foram 25 gols em 86 partidas." }
        ],
        timeRelacionado: "PSG"
    },
    // Barcelona
    {
        enunciado: "Quantos títulos Ronaldinho ganhou pelo Barcelona?",
        alternativas: [
            { texto: "5 títulos", afirmacao: "Correto! 2 Ligas, 1 Champions, 1 Supercopa da Espanha e 1 Mundial de Clubes." },
            { texto: "3 títulos", afirmacao: "Errado. Foram 5 títulos importantes." },
            { texto: "7 títulos", afirmacao: "Errado. Foram 5 títulos principais." }
        ],
        timeRelacionado: "Barcelona"
    },
    // Milan
    {
        enunciado: "Quantos gols Ronaldinho marcou pelo Milan?",
        alternativas: [
            { texto: "26 gols", afirmacao: "Correto! Ele marcou 26 gols em 95 jogos pelo clube italiano." },
            { texto: "15 gols", afirmacao: "Errado. Foram 26 gols pelo Milan." },
            { texto: "35 gols", afirmacao: "Errado. Foram 26 gols em 95 partidas." }
        ],
        timeRelacionado: "Milan"
    },
    // Flamengo
    {
        enunciado: "Em que ano Ronaldinho deixou o Flamengo?",
        alternativas: [
            { texto: "2012", afirmacao: "Correto! Ele saiu do Flamengo em junho de 2012." },
            { texto: "2011", afirmacao: "Errado. Ele jogou até meados de 2012." },
            { texto: "2013", afirmacao: "Errado. Ele já estava no Atlético-MG em 2013." }
        ],
        timeRelacionado: "Flamengo"
    },
    // Atlético-MG
    {
        enunciado: "Qual título Ronaldinho conquistou pelo Atlético-MG em 2013?",
        alternativas: [
            { texto: "Libertadores", afirmacao: "Correto! Ele ganhou a Libertadores em 2013." },
            { texto: "Brasileirão", afirmacao: "Errado. O título foi a Libertadores." },
            { texto: "Copa do Brasil", afirmacao: "Errado. O título principal foi a Libertadores." }
        ],
        timeRelacionado: "Atlético-MG"
    },
    // Querétaro
    {
        enunciado: "Quantos jogos Ronaldinho fez pelo Querétaro?",
        alternativas: [
            { texto: "29 jogos", afirmacao: "Correto! Ele disputou 29 partidas pelo clube mexicano." },
            { texto: "19 jogos", afirmacao: "Errado. Foram 29 jogos pelo Querétaro." },
            { texto: "35 jogos", afirmacao: "Errado. Foram 29 partidas no México." }
        ],
        timeRelacionado: "Querétaro"
    },
    // Fluminense
    {
        enunciado: "Quantos jogos Ronaldinho fez pelo Fluminense?",
        alternativas: [
            { texto: "9 jogos", afirmacao: "Correto! Ele fez apenas 9 jogos pelo tricolor em 2015." },
            { texto: "15 jogos", afirmacao: "Errado. Foram apenas 9 jogos." },
            { texto: "5 jogos", afirmacao: "Errado. Foram 9 partidas pelo Flu." }
        ],
        timeRelacionado: "Fluminense"
    }
];

// Variáveis de controle
let perguntaAtual = 0;
let pontuacao = 0;
let historicoRespostas = [];

// Mostra os emblemas dos clubes
function mostrarEmblemas() {
    clubes.forEach(clube => {
        const emblema = document.createElement("div");
        emblema.className = "emblema";
        emblema.title = `${clube.nome} (${clube.periodo})`;
        emblema.style.backgroundImage = `url('${clube.emblema}')`;
        emblemasClubes.appendChild(emblema);
    });
}

// Mostra a imagem do time correspondente à pergunta
function mostrarImagemTime() {
    const pergunta = perguntas[perguntaAtual];
    let clube = clubes.find(c => c.nome === pergunta.timeRelacionado);
    
    if (!clube) {
        clube = { 
            nome: pergunta.timeRelacionado, 
            periodo: "", 
            imagem: "https://conteudo.imguol.com.br/c/esporte/d2/2020/06/25/ronaldinho-com-a-camisa-da-selecao-brasileira-1593106250218_v2_900x506.jpg",
            emblema: "https://logodownload.org/wp-content/uploads/2016/09/brasil-selecao-logo-1.png"
        };
    }
    
    imagemTime.innerHTML = `
        <div class="info-time">
            <h3>${clube.nome} ${clube.periodo ? `(${clube.periodo})` : ''}</h3>
            <img src="${clube.imagem}" alt="Ronaldinho no ${clube.nome}">
            <p>Clique na imagem para trocar</p>
        </div>
    `;
    
    imagemTime.querySelector('img').addEventListener('click', () => {
        const novaImagem = prompt("Cole o URL da imagem do time:");
        if (novaImagem) {
            imagemTime.querySelector('img').src = novaImagem;
        }
    });
}

// Mostra a pergunta atual
function mostrarPergunta() {
    if (perguntaAtual >= perguntas.length) {
        mostrarResultado();
        return;
    }
    
    caixaResultado.style.display = "none";
    botaoRecomecar.style.display = "none";
    
    const pergunta = perguntas[perguntaAtual];
    caixaPerguntas.textContent = pergunta.enunciado;
    caixaAlternativas.innerHTML = "";
    
    mostrarImagemTime();
    
    pergunta.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.addEventListener("click", () => selecionarResposta(index));
        caixaAlternativas.appendChild(botao);
    });
}

// Processa a resposta selecionada
function selecionarResposta(indice) {
    const pergunta = perguntas[perguntaAtual];
    const respostaSelecionada = pergunta.alternativas[indice];
    
    historicoRespostas.push({
        pergunta: pergunta.enunciado,
        resposta: respostaSelecionada.texto,
        afirmacao: respostaSelecionada.afirmacao,
        correta: indice === 0
    });
    
    if (indice === 0) {
        pontuacao++;
    }
    
    perguntaAtual++;
    mostrarPergunta();
}

// Mostra o resultado final
function mostrarResultado() {
    caixaPerguntas.textContent = `Resultado Final: ${pontuacao} de ${perguntas.length} acertos!`;
    caixaAlternativas.innerHTML = "";
    imagemTime.innerHTML = `
        <div class="info-time">
            <h3>Carreira Completa</h3>
            <img src="https://www.hojeemdia.com.br/image/policy:1.145178.1628410813:1628410813/image.jpg?w=1280&" alt="Ronaldinho Gaúcho">
        </div>
    `;
    caixaResultado.style.display = "block";
    botaoRecomecar.style.display = "block";
    
    let resultadoHTML = `
        <h3>Resumo da Carreira de Ronaldinho Gaúcho:</h3>
        <ul>
            <li><strong>Nome completo:</strong> Ronaldo de Assis Moreira</li>
            <li><strong>Nascimento:</strong> 21 de março de 1980 em Porto Alegre</li>
            <li><strong>Posição:</strong> Meia-atacante</li>
            <li><strong>Clubes principais:</strong> Grêmio, PSG, Barcelona, Milan, Flamengo, Atlético-MG</li>
            <li><strong>Títulos principais:</strong> Copa do Mundo 2002, Champions League 2006, Libertadores 2013</li>
        </ul>
        
        <h3>Seu Desempenho no Quiz:</h3>
        <ol>
    `;
    
    historicoRespostas.forEach((resposta, index) => {
        resultadoHTML += `
            <li>
                <strong>${resposta.pergunta}</strong><br>
                Sua resposta: ${resposta.resposta} ${resposta.correta ? '✅' : '❌'}<br>
                ${resposta.afirmacao}
            </li>
        `;
    });
    
    resultadoHTML += `
        </ol>
        
        <h3>Principais Conquistas:</h3>
        <table>
            <tr>
                <th>Ano</th>
                <th>Conquista</th>
                <th>Clube/Seleção</th>
            </tr>
            <tr>
                <td>1999</td>
                <td>Copa do Mundo Sub-17</td>
                <td>Brasil</td>
            </tr>
            <tr>
                <td>2002</td>
                <td>Copa do Mundo</td>
                <td>Brasil</td>
            </tr>
            <tr>
                <td>2005</td>
                <td>Bola de Ouro</td>
                <td>Barcelona</td>
            </tr>
            <tr>
                <td>2006</td>
                <td>Champions League</td>
                <td>Barcelona</td>
            </tr>
            <tr>
                <td>2013</td>
                <td>Libertadores</td>
                <td>Atlético-MG</td>
            </tr>
        </table>
    `;
    
    textoResultado.innerHTML = resultadoHTML;
}

// Reinicia o quiz
function recomecarQuiz() {
    perguntaAtual = 0;
    pontuacao = 0;
    historicoRespostas = [];
    textoResultado.textContent = "";
    mostrarPergunta();
}

// Permite trocar a foto principal
fotoRonaldinho.addEventListener('click', () => {
    const novaFoto = prompt("Cole o URL da nova foto do Ronaldinho:");
    if (novaFoto) {
        fotoRonaldinho.src = novaFoto;
    }
});

// Event listeners
botaoRecomecar.addEventListener("click", recomecarQuiz);

// Inicia o quiz
mostrarEmblemas();
mostrarPergunta();