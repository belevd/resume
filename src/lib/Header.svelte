<script>
  import Select from "./ui/Select.svelte";
  import {language} from "../i18n/index.ts";

  const options = [
    {label: 'RU', value: 'ru'},
    {label: 'EN', value: 'en'}
  ];

  let selectedLang = {value: $language, label: $language.toUpperCase()}
  language.subscribe(value => {
    selectedLang = {value, label: value.toUpperCase()}
  })

  const onLanguageChange = (value) => {
    language.set(value.value);
  };
</script>

<header class="header">
    <Select class="header__select" options={options} onChange={onLanguageChange} value={selectedLang}/>
</header>


<style>
    .header > :global(.header__select) {
      width: 4.5em;
    }
</style>