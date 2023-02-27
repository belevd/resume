<script>
    export let active = false;
</script>

<section class={`reveal ${active ? 'active' : ''}`}>
    <slot></slot>
</section>

<style>
    :global(.reveal) {
      position: relative;
      transform: translateY(0px);
      opacity: 0;
      transition: 2s all ease-in-out;
    }
    :global(.reveal.active) {
      transform: translateY(0);
      opacity: 1;
    }
</style>