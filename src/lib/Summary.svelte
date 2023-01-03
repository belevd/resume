<script>
  import {t} from "../i18n/index.ts";
</script>

<div class="summary">
    <h2>{`${$t('summary.title')}:`}</h2>
    <p>{$t('summary.text')}</p>
</div>

<style>
    .summary {
      animation: show 1s ease-in-out;
    }

    p {
      white-space: pre-line;
      font-size: 1.25em;
      max-width: 80vw;
    }
</style>