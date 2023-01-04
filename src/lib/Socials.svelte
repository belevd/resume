<script>
  import {SOCIALS} from "../config/index.ts";
</script>

<aside class="socials">
    {#each SOCIALS as social}
        <a class="social__link" href={social.link} target="_blank" rel="noreferrer">
            <svelte:component width={50} height={50} class="social__icon" this={social.icon} />
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
      max-width: 1em;
    }

    .social__link:hover {
      color: var(--base-medium);
    }
</style>