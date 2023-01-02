<script>
  import {elasticInOut} from "svelte/easing";
  import { fade } from 'svelte/transition';

  export let list = [];

  import {t} from '../i18n/index.ts';
  import {onMount} from "svelte";

  let showingList = [];

  function addItemToList() {
    if (showingList.length !== list.length) {
      setTimeout(() => {
        showingList = [...showingList, list[showingList.length]]
        addItemToList();
      }, 300);
    }
  }

  onMount(() => {
    if (list.length) {
      addItemToList();
    }
  })
</script>

<div>
    <h2 class="list__title">{`${$t('stack.title')}:`}</h2>
    <ul class="list">
        {#each showingList as item, index (item)}
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
    padding: 0 0.5em 0 2em;
    font-size: 1.5em;
  }

  .list__item {
    padding: 0.2em 0;
  }
</style>