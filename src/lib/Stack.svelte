<script>
  import { fade } from 'svelte/transition';
  import { viewport } from '../shared/lib';
  import { changeTitle } from "../app/lib";

  export let list = [];

  import {t} from '../i18n/index.ts';
</script>

<div>
    <h2 use:viewport on:enterViewport={() => changeTitle('stack')} id="stack" class="list__title">{`${$t('stack.title')}:`}</h2>
    <ul class="list">
        {#each list as item, index (item)}
            <li transition:fade class="list__item">
                {item.title}
            </li>
        {/each}
    </ul>
</div>

<style>
  .list__title {
    animation: show 1s ease-in-out;
  }

  .list {
    list-style: none;
    padding: 0;
    font-size: 1.5em;
    animation: show 1s ease-in-out;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    width: 100%;
  }

  .list__item {
    padding: 0.5em 0.5em;
    border: 1px solid var(--base-medium);
    border-radius: 1em;
  }
</style>