import { toggleButton } from "./toggleButton";
import { fieldsetLang } from "./fieldsetLang";
import { content_EN } from "./content_EN";
import { content_ES } from "./content_ES";
import { content_PT } from "./content_PT";

function homepage() {
  const root = document.documentElement;
  root.setAttribute("lang", "en");
  root.setAttribute("id", "root-element");
  root.className = "light";

  const divButtons = document.createElement("div");
  divButtons.className = "setButtons";
  const toggle = toggleButton(root);
  const fieldset = fieldsetLang(displayRadioValue);

  const main = document.createElement("main");
  const content = document.createElement("section");

  let selectedLang = 1;
  let allOptions = [content_EN, content_ES, content_PT];
  displaySelectedText(1, allOptions);

  function removePrevContent() {
    let prevContent = document.querySelector("article");
    if (prevContent) {
      prevContent.remove();
    }
  }

  function displayRadioValue() {
    let getSelectedValue = document.querySelector(
      'input[name="language"]:checked'
    );
    if (getSelectedValue != null) {
      removePrevContent();
      selectedLang = getSelectedValue.value;
      displaySelectedText(selectedLang, allOptions);
    }
  }

  function displaySelectedText(selectedLang, allOptions) {
    const article = allOptions[selectedLang - 1]();
    content.appendChild(article);
  }

  document.body.appendChild(main);
  main.appendChild(divButtons);
  main.appendChild(content);

  divButtons.appendChild(toggle);
  divButtons.appendChild(fieldset);
}

export { homepage };
