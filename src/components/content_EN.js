import { divLinkToVideo } from "./divForVideo";
import { writeFooter } from "./divForFooter";

const content_EN = () => {
  const content = document.createElement("article");
  const title = document.createElement("h1");
  title.textContent = "How the script for repetitive accounting tasks works";

  const firstParr = document.createElement("div");
  const txt1 = document.createElement("p");
  txt1.textContent =
    "This script runs within a spreadsheet, which was previously designed for accounting records and now integrates this script to automate the repetitive task of accounting for each journal entry, which subsequently generates the ledgers for each account and the balance sheet and profit and loss statement.";

  const subtitle1 = document.createElement("p");
  subtitle1.className = "subtitle";
  subtitle1.textContent =
    "A well-designed Google Sheets + Google Apps Script system.";

  const txt2 = document.createElement("p");
  txt2.textContent =
    "This approach was designed for a small company looking for a simple solution, to keep and generate all accounting records and financial statements, with manageable transaction volumes, without specialized accounting software.";

  const subtitle2 = document.createElement("p");
  subtitle2.className = "subtitle";
  subtitle2.textContent = "Features";

  const arrayFeatures = [
    "The pre-designed spreadsheet uses linked formulas and pivot tables to generate the trial balance, general ledgers, balance sheet, and income statement.",
    "The script was designed to write the contents of each journal entry to its respective ledger account.",
    "This significantly reduces the time and effort spent on this task and minimizes the possibility of human error.",
    "The journal entries are written with their respective account codes and amounts in the debit and credit columns, on the sheet designed for that purpose.",
    "The script is then executed:  Extensions \u27FC  Macros \u27FC Name of the script.",
    "The script starts and first checks the data that will be posted, then sends a message asking the user to confirm if they agree.",
    "After user confirmation, the script begins writing the formulas and data that will enable the generation of the corresponding statements.",
    "The respective states will provide all updated information.",
    "Watch the demonstration video:",
  ];

  const tools = [
    "The script is designed as a standalone Google Apps Script library, which allows for centralized management and reuse across multiple projects. This library is deployed as a versioned script in Google Drive, and its unique Script ID is used to reference it from other Google Sheets.",
    "By using a library, you avoid duplicating code in each spreadsheet, ensuring consistency and simplifying updates—any changes made to the library are automatically reflected in all linked spreadsheets when they are set to use the latest version.",
    "The accounting spreadsheet, which was previously designed for accounting records, now integrates this library to automate the repetitive task of accounting for each journal entry. This integration is achieved by adding the library to the spreadsheet’s script editor using its Script ID.",
    "This facilitates maintenance and testing, and avoids performance issues or quota limitations that could arise when linking scripts directly to individual spreadsheets.",
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

  const altTxt = "watch the demonstration video";
  divLinkToVideo(content, altTxt);

  const subtitle3 = document.createElement("p");
  subtitle3.className = "subtitle";
  subtitle3.textContent = "Design highlights";
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
    "The purpose of these scripts is to adapt them to the needs of each individual customer.";

  content.appendChild(hookDiv);
  hookDiv.appendChild(txt3);

  writeFooter(content);
  return content;
};

export { content_EN };
