function fieldsetLang(arg) {
  // arg is the function for display radio button value
  const arrayLang = [
    { id: 1, lang: "english", abrev: "en" },
    { id: 2, lang: "español", abrev: "es" },
    { id: 3, lang: "portugués", abrev: "pt" },
  ];

  const selectLanguage = document.createElement("fieldset");
  arrayLang.map((e) => {
    const div = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");
    label.textContent = e.abrev;
    label.setAttribute("for", e.lang);
    input.setAttribute("type", "radio");
    input.setAttribute("name", "language");
    input.setAttribute("value", e.id);
    input.setAttribute("id", e.lang);

    input.addEventListener("change", () => {
      arg();
    });

    if (input.getAttribute("id") === "english") {
      input.setAttribute("checked", "true");
    }

    selectLanguage.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);
  });

  return selectLanguage;
}

export { fieldsetLang };
