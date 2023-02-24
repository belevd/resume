<script>
  import {SOCIALS} from "../config/index.ts";

  const onHover = (event) => {
    // console.log(event.currentTarget.href);
  }
</script>

<aside class="socials">
    {#each SOCIALS as social}
        <a on:mouseover={onHover} class="social__link" href={social.link} target="_blank" rel="noreferrer">
            <svelte:component class="social__icon" this={social.icon} />
        </a>
    {/each}
</aside>

<style>
    .socials {
      position: fixed;
      right: 2em;
      top: 50%;
      z-index: 2;
      color: var(--base-weak);
    }

    .social__link {
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