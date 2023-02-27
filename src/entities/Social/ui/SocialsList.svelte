<script>
  import {SOCIALS} from "../config/index.ts";
  import Social from "./SocialButton.svelte";
</script>

<div class="socials">
    {#each SOCIALS as social}
        <Social link={social.link} icon={social.icon} />
    {/each}
</div>

<style>
    .socials {
      display: flex;
      gap: 1rem;
      color: var(--base-weak);
    }
</style>