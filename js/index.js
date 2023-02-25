import { loadUserLangOrDefault, onLangSelect } from "@/js/common/i18n";

/** @type {HTMLSelectElement} */
// @ts-ignore
const LANG_SELECT = document.getElementById("lang-select");

[LANG_SELECT.value] = loadUserLangOrDefault();

LANG_SELECT.addEventListener("change", (e) => {
  e.preventDefault();
  // @ts-ignore
  onLangSelect(e.target.value);
});
