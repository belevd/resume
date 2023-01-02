<script>
  import {t} from "../i18n/index.ts";
</script>

<h1 class="intro">
    {`${$t('intro.hello')},\n`}
    {`${$t('intro.name')}.\n`}
    {`${$t('intro.developer')}.`}
</h1>

<style>
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .intro {
    white-space: pre-line;
    animation: show 1s ease-in-out;
  }
</style>