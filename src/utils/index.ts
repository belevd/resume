import {language, t, translations} from "../i18n";
import {derived} from "svelte/store";

function plur(lang, number, key) {
  if (lang === 'en') {
    return translations[lang][key];
  }
  if (lang === 'ru') {
    const decl1 = 1;
    const decl2x4 = 4;
    const titleOther = 2;
    const ten = 10;

    const titles = [translations[lang][`${key}-1`], translations[lang][`${key}-2`], translations[lang][`${key}-3`]];

    if (number % (ten * ten) >= ten && number % (ten * ten) < (ten + ten)) return titles[titleOther];
    if (number % ten === decl1) return titles[0];
    if (number % ten > decl1 && number % ten <= decl2x4) return titles[1];
    return titles[titleOther];
  }
}

export const pluralize = derived(
  language,
  ($language) => (number: number, key: string) => plur($language, number, key),
)