import { divLinkToVideo } from "./divForVideo";
import { writeFooter } from "./divForFooter";

const content_ES = () => {
  const content = document.createElement("article");
  const title = document.createElement("h1");
  title.textContent =
    "Cómo funciona el script para tareas contables repetitivas";

  const firstParr = document.createElement("div");
  const txt1 = document.createElement("p");
  txt1.textContent =
    "Este script se ejecuta dentro de una hoja de cálculo, que anteriormente se diseñó para registros contables y ahora integra este script para automatizar la tarea repetitiva de contabilizar cada asiento contable, lo que posteriormente genera los libros mayores de cada cuenta y el balance general y los estados de resultados.";

  const subtitle1 = document.createElement("p");
  subtitle1.className = "subtitle";
  subtitle1.textContent =
    "Una combinación bien diseñada de Google Sheets y Google Apps Script.";

  const txt2 = document.createElement("p");
  txt2.textContent =
    "Este enfoque fue diseñado para una pequeña empresa que buscaba una solución sencilla para mantener y generar todos los registros contables y estados financieros con volúmenes de transacciones manejables, sin necesidad de software contable especializado.";

  const subtitle2 = document.createElement("p");
  subtitle2.className = "subtitle";
  subtitle2.textContent = "Funcionalidades";

  const arrayFeatures = [
    "La hoja de cálculo prediseñada utiliza fórmulas vinculadas y tablas dinámicas para generar el balance de comprobación, los libros mayores, el balance general y el estado de resultados.",
    "El script fue diseñado para escribir el contenido de cada entrada del diario en su respectiva cuenta del libro mayor.",
    "Esto reduce significativamente el tiempo y el esfuerzo dedicados a esta tarea y minimiza la posibilidad de error humano.",
    "Los asientos contables se escriben con sus respectivos códigos de cuenta e importes en las columnas de débito y crédito, en la hoja diseñada para tal fin.",
    "A continuación, se ejecuta el script:  Extensiones \u27FC  Macros \u27FC Nombre del script.",
    "El script se inicia y primero comprueba los datos que se publicarán, luego envía un mensaje pidiendo al usuario que confirme si está de acuerdo.",
    "Tras la confirmación del usuario, el script comienza a escribir las fórmulas y los datos que permitirán generar los estados correspondientes.",
    "Los respectivos estados proporcionarán toda la información actualizada.",
    "Vea el vídeo de demostración:",
  ];

  const tools = [
    "El script se ha diseñado como una librería independiente de Google Apps Script, lo que permite su gestión centralizada y su reutilización en varios proyectos. Esta librería se implementa como un script versionado en Google Drive, y su ID de script único se utiliza para hacer referencia desde otras hojas de cálculo de Google.",
    "Al utilizar una librería, se evita duplicar el código en cada hoja de cálculo, lo que garantiza la coherencia y simplifica las actualizaciones: cualquier cambio realizado en la librería se refleja automáticamente en todas las hojas de cálculo vinculadas cuando se configuran para utilizar la última versión.",
    "La hoja de cálculo contable, que anteriormente se diseñó para registros contables, ahora integra esta biblioteca para automatizar la tarea repetitiva de contabilizar cada asiento contable. Esta integración se logra añadiendo la biblioteca al editor de scripts de la hoja de cálculo utilizando su ID de script.",
    "Esto facilita el mantenimiento y las pruebas, y evita problemas de rendimiento o limitaciones de cuota que podrían surgir al vincular scripts directamente a hojas de cálculo individuales",
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

  const altTxt = "vea el vídeo de demostración";
  divLinkToVideo(content, altTxt);

  const subtitle3 = document.createElement("p");
  subtitle3.className = "subtitle";
  subtitle3.textContent = "Aspectos destacados del diseño";
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
    "El objetivo de estos scripts es adaptarlos a las necesidades de cada cliente en particular.";

  content.appendChild(hookDiv);
  hookDiv.appendChild(txt3);

  writeFooter(content);

  return content;
};

export { content_ES };
