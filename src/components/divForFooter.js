import { mnl_portfolio } from "../assets/link_address";
import logo from "../assets/mn_bg_white.ico";

function writeFooter(content) {
  const footer = document.createElement("footer");
  const mn_logo = new Image();
  mn_logo.src = logo;
  const img = document.createElement("img");
  img.setAttribute("src", mn_logo.src);
  img.setAttribute("alt", "maria nelly lopez logo");
  img.setAttribute("width", "30px");
  img.setAttribute("height", "30px");
  const copy = document.createElement("p");
  copy.textContent = "\u00A9 2025 marianellylopez";

  const contactme = document.createElement("a");
  contactme.setAttribute("href", mnl_portfolio);
  contactme.setAttribute("target", "_blank");
  contactme.setAttribute("rel", "noopener noreferrer");
  contactme.textContent = "Contact Me for Developer Stuff";

  content.appendChild(footer);
  footer.appendChild(img);
  footer.appendChild(copy);
  footer.appendChild(contactme);
}

export { writeFooter };
