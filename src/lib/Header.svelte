<script>
  import Select from "./ui/Select.svelte";
  import {language} from "../i18n/index.ts";

  const options = [
    {label: 'EN', value: 'en'},
    {label: 'RU', value: 'ru'},
  ];

  let selectedLang = {value: $language, label: $language.toUpperCase()}
  language.subscribe(value => {
    selectedLang = {value, label: value.toUpperCase()}
  })

  const onLanguageChange = (value) => {
    language.set(value.value);
    localStorage.setItem('lang', value.value);
  };
</script>

<header class="header">
    <Select class="header__select" options={options} onChange={onLanguageChange} value={selectedLang}/>
</header>


<style>
    .header {
      position: fixed;
      top: 0;
      right: 1em;
      margin-left: auto;
      display: flex;
      width: fit-content;
      padding-top: 2em;
      z-index: 1;
    }

    .header > :global(.header__select) {
      width: 4.5em;
    }
</style>