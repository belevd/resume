<script>
  import Select from "../../shared/ui/Select.svelte";
  import {language, t} from "../../i18n/index.ts";
  import SocialsList from "../../entities/Social/ui/SocialsList.svelte";
  import {activeTitle} from "../lib";

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
    <nav>
        <a class:tab_active={$activeTitle.intro.active} href="#intro">{$t('intro')}</a>
        <a class:tab_active={$activeTitle.stack.active}  href="#stack">{$t('stack')}</a>
        <a class:tab_active={$activeTitle.projects.active}  href="#projects">{$t('projects')}</a>
    </nav>
    <SocialsList />
    <Select class="header__select" options={options} onChange={onLanguageChange} value={selectedLang}/>
</header>


<style>
    .header {
      position: sticky;
      top: 0;
      display: grid;
      grid-template-columns: 8fr auto 1fr;
      align-items: center;
      gap: 2rem;
      padding: 1rem 2rem;
      margin-bottom: 1rem;
      border-bottom: 1px solid var(--base-weak);
      width: 100%;
      background: var(--base-strong);
      border-radius: 0 0 1rem 1rem;
      z-index: 1;
    }

    .header > :global(.header__select) {
      width: 4.5em;
    }

    nav {
      position: relative;
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }

    :global(.tab_active) {
      color: var(--accent-strong);
    }

    @media screen and (max-width: 1024px) {
      .header {
        padding: 1rem;
      }
    }
</style>