// Elementos da página
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");
const caixaResultado = document.querySelector(".caixa-resultado");
const botaoRecomecar = document.querySelector(".botao-recomecar");

// Perguntas do quiz com história ampliada (5 perguntas)
const perguntas = [
    {
        enunciado: "Setembro de 1939: Com a invasão da Polônia pela Alemanha, a Europa entra em guerra. Como assessor de Vargas, qual posição você recomenda?",
        alternativas: [
            {
                texto: "Neutralidade pragmática",
                afirmacao: "Sua recomendação por neutralidade prevaleceu. O Brasil manteve relações com ambos os lados, exportando café para os Aliados e borracha para o Eixo. As reservas internacionais saltaram de US$ 71 milhões (1939) para US$ 289 milhões (1941)."
            },
            {
                texto: "Alinhamento progressivo com os Aliados",
                afirmacao: "Você defendeu apoio discreto aos Aliados. O Brasil permitiu uso de rotas marítimas e compartilhou informações sobre o Eixo. Em troca, obteve promessas de investimentos americanos, incluindo US$ 20 milhões para a Usina de Volta Redonda."
            }
        ]
    },
    {
        enunciado: "Agosto de 1942: Submarinos alemães afundam 5 navios brasileiros em uma semana, matando 607 pessoas. Qual resposta adotar?",
        alternativas: [
            {
                texto: "Declarar guerra imediatamente",
                afirmacao: "Sua influência levou à declaração de guerra em 22/08/1942. O país mobilizou-se: criou a FEB, permitiu bases aliadas no Nordeste e iniciou caça a espiões. A campanha 'Dê sua joia para a vitória' arrecadou 3 toneladas de ouro."
            },
            {
                texto: "Romper relações sem declarar guerra",
                afirmacao: "Você optou por resposta medida: rompemos relações e confiscamos propriedades alemãs, mas evitamos conflito direto. Mais de 55 mil 'soldados da borracha' foram enviados para a Amazônia, com cerca de 30 mil mortes por doenças."
            }
        ]
    },
    {
        enunciado: "Janeiro de 1943: Como lidar com os imigrantes alemães e italianos durante a guerra?",
        alternativas: [
            {
                texto: "Restringir atividades e monitorar",
                afirmacao: "Implementou medidas rigorosas: 3.000 imigrantes presos, escolas alemãs fechadas e proibição de línguas estrangeiras em público. O DIP censurava correspondências e interceptava comunicações."
            },
            {
                texto: "Garantir direitos com vigilância moderada",
                afirmacao: "Sua abordagem equilibrada protegeu direitos básicos enquanto monitorava atividades suspeitas. Apenas 500 indivíduos com fortes vínculos ao Eixo foram detidos, evitando perseguição generalizada."
            }
        ]
    },
    {
        enunciado: "Julho de 1944: Como mobilizar a economia para o esforço de guerra?",
        alternativas: [
            {
                texto: "Focar na produção de matérias-primas",
                afirmacao: "Priorizou nossos pontos fortes: produção de borracha (50 mil toneladas/ano), minérios estratégicos (manganês, quartzo) e indústria têxtil. O Brasil tornou-se principal fornecedor de matérias-primas na América do Sul."
            },
            {
                texto: "Diversificar com industrialização",
                afirmacao: "Sua visão ampliou nossa base industrial: produção de armamentos leves, peças para aviões e medicamentos. A produção de aço em pequena escala começou em Volta Redonda, com PIB industrial crescendo 80% (1939-1945)."
            }
        ]
    },
    {
        enunciado: "Março de 1945: Como preparar o Brasil para o pós-guerra?",
        alternativas: [
            {
                texto: "Aproximar-se dos EUA e capitalismo",
                afirmacao: "Alinhou o Brasil ao bloco ocidental. Conseguimos empréstimos do Eximbank, tecnologia para a CSN e apoio para entrar no FMI. Porém, essa dependência limitou nossa autonomia na Guerra Fria."
            },
            {
                texto: "Manter política externa independente",
                afirmacao: "Optou por multilateralismo: fortalecemos laços com América Latina e Europa. Participamos da criação da ONU com posição própria, e em 1947 nosso delegado presidiu a sessão que aprovou a criação de Israel."
            }
        ]
    }
];

// Variáveis de controle
let perguntaAtual = 0;
let historicoRespostas = [];

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
    
    pergunta.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.addEventListener("click", () => selecionarResposta(index));
        caixaAlternativas.appendChild(botao);
    });
}

// Processa a resposta selecionada
function selecionarResposta(indice) {
    historicoRespostas.push(perguntas[perguntaAtual].alternativas[indice].afirmacao);
    perguntaAtual++;
    mostrarPergunta();
}

// Mostra o resultado final
function mostrarResultado() {
    caixaPerguntas.textContent = "1945-1950: O Brasil no Pós-Guerra";
    caixaAlternativas.innerHTML = "";
    caixaResultado.style.display = "block";
    botaoRecomecar.style.display = "block";
    
    const contextoHistorico = `
        <h3>Suas Decisões Estratégicas:</h3>
        <ol>
            ${historicoRespostas.map(resposta => `<li>${resposta}</li>`).join('')}
        </ol>
        
        <h3>Transformações Imediatas (1945-1947):</h3>
        <ul>
            <li><strong>Política:</strong> Eleições livres em 1945 puseram fim ao Estado Novo. A Constituição de 1946 garantiu direitos trabalhistas.</li>
            <li><strong>Economia:</strong> A CSN começou em 1946 (200 mil toneladas/ano de aço). Inflação de guerra (20% ao ano) começou a ser controlada.</li>
            <li><strong>Forças Armadas:</strong> Veteranos da FEB trouxeram experiência moderna. Escola Superior de Guerra criada em 1949.</li>
        </ul>
        
        <h3>Legado de Longo Prazo:</h3>
        <table>
            <tr>
                <th>Área</th>
                <th>Impacto</th>
            </tr>
            <tr>
                <td>Industrialização</td>
                <td>Produção industrial triplicou (1945-1960). Indústria automobilística chegou em 1956.</td>
            </tr>
            <tr>
                <td>Política Externa</td>
                <td>Mediadores em conflitos e defensores do desenvolvimento econômico multilateral.</td>
            </tr>
            <tr>
                <td>Sociedade</td>
                <td>Ideais democráticos influenciaram movimentos sociais. Urbanização acelerada (56% em 1960).</td>
            </tr>
        </table>
        
        <h3>Balanço da Guerra:</h3>
        <table>
            <tr>
                <th>Custos</th>
                <th>Ganhos</th>
            </tr>
            <tr>
                <td>1.081 mortos no mar</td>
                <td>CSN e industrialização</td>
            </tr>
            <tr>
                <td>454 pracinhas mortos</td>
                <td>Modernização militar</td>
            </tr>
            <tr>
                <td>30 mil "soldados da borracha"</td>
                <td>Prestígio internacional</td>
            </tr>
            <tr>
                <td>Inflação acumulada de 150%</td>
                <td>Direitos trabalhistas consolidados</td>
            </tr>
        </table>
        
        <p>A participação na guerra marcou a transição do Brasil de país agrário para nação industrial emergente, pavimentando o caminho para o desenvolvimento das décadas seguintes.</p>
    `;
    
    textoResultado.innerHTML = contextoHistorico;
}

// Reinicia o quiz
function recomecarQuiz() {
    perguntaAtual = 0;
    historicoRespostas = [];
    textoResultado.textContent = "";
    mostrarPergunta();
}

// Event listeners
botaoRecomecar.addEventListener("click", recomecarQuiz);

// Inicia o quiz
mostrarPergunta();