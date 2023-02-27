<script>
  import {t} from "../i18n/index.ts";
</script>

<h1 id="intro" class="intro">
    {`${$t('intro.hello')},\n`}
    {`${$t('intro.name')}.\n`}
    {`${$t('intro.developer')}.`}
</h1>

<style>
  .intro {
    margin-top: 0;
    white-space: pre-line;
    animation: show 1s ease-in-out;
    margin-bottom: 0;
  }
</style>