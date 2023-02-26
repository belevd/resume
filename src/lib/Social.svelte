<script>
  export let link, icon
</script>

<a
    class="social__link"
    href={link}
    target="_blank"
    rel="noreferrer"
>
    <svelte:component class="social__icon" this={icon}/>
</a>

<style>
  .social__link {
    position: relative;
    color: var(--base-weak);
    margin-bottom: 1rem;
    display: block;
  }

  .social__link:last-child {
    margin-bottom: 0;
  }

  .social__link:hover {
    color: var(--base-medium);
  }

  :global(.social__icon) {
    width: 3em;
    display: block;
  }

  @media (max-width: 1024px) {
    :global(.social__icon) {
      width: 2em;
    }
  }
</style>