import ru from './ru';
import en from './en';
import {derived, writable} from "svelte/store";

export const translations = {
  ru,
  en
};

export const language = writable(localStorage.getItem('lang') || 'en');

language.subscribe(value => {
  document.documentElement.lang = value;
  if (value === 'en') {
    document.title = 'Evgenii Belolipetskii'
  }
  if (value === 'ru') {
    document.title = 'Евгений Белолипецкий'
  }
});

function translate(locale: string, key: string, vars: { [key: string]: any }) {
  if (!key) throw new Error("no key provided to $t()");
  if (!locale) throw new Error(`no translation for key "${key}"`);

  let text = translations[locale][key];

  if (!text) throw new Error(`no translation found for ${locale}.${key}`);

  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g");
    text = text.replace(regex, vars[k]);
  });

  return text;
}

export const t = derived(
  language,
  ($language) => (key, vars = {}) => translate($language, key, vars)
);
