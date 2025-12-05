import { divLinkToVideo } from "./divForVideo";
import { writeFooter } from "./divForFooter";

const content_PT = () => {
  const content = document.createElement("article");
  const title = document.createElement("h1");
  title.textContent =
    "Como funciona o script para tarefas contabilísticas repetitivas";

  const firstParr = document.createElement("div");
  const txt1 = document.createElement("p");
  txt1.textContent =
    "Este script é executado numa folha de cálculo, que foi previamente concebida para registos contabilísticos e agora integra este script para automatizar a tarefa repetitiva de contabilizar cada lançamento no diário, o que subsequentemente gera os livros contábeis para cada conta e o balanço patrimonial e a demonstração de resultados.";

  const subtitle1 = document.createElement("p");
  subtitle1.className = "subtitle";
  subtitle1.textContent =
    "Uma solução bem concebida com Google Sheets + Google Apps Script.";

  const txt2 = document.createElement("p");
  txt2.textContent =
    "Esta abordagem foi concebida para uma pequena empresa que procurava uma solução simples para manter e gerar todos os registos contabilísticos e demonstrações financeiras, com volumes de transações geríveis, sem necessidade de software contabilístico especializado.";

  const subtitle2 = document.createElement("p");
  subtitle2.className = "subtitle";
  subtitle2.textContent = "Funcionalidades";

  const arrayFeatures = [
    "A folha de cálculo pré-concebida utiliza fórmulas ligadas e tabelas dinâmicas para gerar o balanço de verificação, os livros-razão, o balanço patrimonial e a demonstração de resultados.",
    "O script foi concebido para gravar o conteúdo de cada lançamento do diário na respetiva conta do livro razão.",
    "Isso reduz significativamente o tempo e o esforço gastos nesta tarefa e minimiza a possibilidade de erro humano.",
    "Os lançamentos contábeis são escritos com os respectivos códigos de conta e valores nas colunas de débito e crédito, na folha destinada a esse fim.",
    "O script é então executado:  Extensões \u27FC  Macros \u27FC Nome do script.",
    "O script inicia e verifica primeiro os dados que serão publicados, depois envia uma mensagem pedindo ao utilizador para confirmar se concorda.",
    "Após a confirmação do utilizador, o script começa a escrever as fórmulas e os dados que permitirão a geração das declarações correspondentes.",
    "Os respetivos estados fornecerão todas as informações atualizadas.",
    "Veja o vídeo de demonstração:",
  ];

  const tools = [
    "O script foi concebido como uma biblioteca independente do Google Apps Script, o que permite a gestão centralizada e a reutilização em vários projetos. Esta biblioteca é implementada como um script versionado no Google Drive, e o seu ID de script exclusivo é utilizado para fazer referência a partir de outras folhas de cálculo do Google.",
    "Ao usar uma biblioteca, evita-se a duplicação de código em cada folha de cálculo, garantindo consistência e simplificando as atualizações — quaisquer alterações feitas na biblioteca são automaticamente refletidas em todas as folhas de cálculo vinculadas quando elas estão configuradas para usar a versão mais recente.",
    "A folha de cálculo contabilística, que anteriormente era concebida para registos contabilísticos, integra agora esta biblioteca para automatizar a tarefa repetitiva de contabilizar cada lançamento no diário. Esta integração é conseguida adicionando a biblioteca ao editor de scripts da folha de cálculo utilizando o seu ID de script.",
    "Isso facilita a manutenção e os testes, além de evitar problemas de desempenho ou limitações de quota que poderiam surgir ao ligar scripts diretamente a folhas de cálculo individuais.",
  ];

  content.appendChild(title);
  content.appendChild(firstParr);
  firstParr.appendChild(txt1);
  content.appendChild(subtitle1);
  content.appendChild(txt2);
  content.appendChild(subtitle2);

  arrayFeatures.forEach((e) => {
    const span = document.createElement("span");
    span.textContent = "\u25E6";

    const div = document.createElement("div");
    const text = document.createElement("p");
    text.textContent = e;

    content.appendChild(div);
    div.appendChild(span);
    div.appendChild(text);
  });

  const altTxt = "veja o vídeo de demonstração";
  divLinkToVideo(content, altTxt);

  const subtitle3 = document.createElement("p");
  subtitle3.className = "subtitle";
  subtitle3.textContent = "Destaques do design";
  content.appendChild(subtitle3);

  tools.forEach((e) => {
    const span = document.createElement("span");
    span.textContent = "\u25E6";

    const div = document.createElement("div");
    const text = document.createElement("p");
    text.textContent = e;

    content.appendChild(div);
    div.appendChild(span);
    div.appendChild(text);
  });

  const hookDiv = document.createElement("div");
  hookDiv.className = "hook";
  const txt3 = document.createElement("p");
  txt3.textContent =
    "O objetivo destes scripts é adaptá-los às necessidades de cada cliente individualmente.";

  content.appendChild(hookDiv);
  hookDiv.appendChild(txt3);

  writeFooter(content);
  return content;
};

export { content_PT };
