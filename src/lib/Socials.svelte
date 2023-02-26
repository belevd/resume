<script>
  import {SOCIALS} from "../config/index.ts";
  import Social from "./Social.svelte";
</script>

<aside class="socials">
    {#each SOCIALS as social}
        <Social link={social.link} icon={social.icon} />
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
</style>