<script>
  import {t} from "../i18n/index.ts";
</script>

<h1 class="intro">
    {`${$t('intro.hello')},\n`}
    {`${$t('intro.name')}.\n`}
    {`${$t('intro.developer')}.`}
</h1>

<style>
  .intro {
    margin-top: 0;
    white-space: pre-line;
    animation: show 1s ease-in-out;
  }
</style>