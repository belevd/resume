<script>
  import {PROJECTS} from "../config/index.ts";
  import {t, language} from '../i18n/index.ts';
  import {pluralize} from "../utils/index.ts";
  import {derived} from "svelte/store";

  let lang;

  language.subscribe(value => {
    lang = value;
  })

  function localizeDate (date) {
    return new Date(date).toLocaleDateString()
  }

  function getDuration (duration) {
    const dur = Date.parse(duration.to) - Date.parse(duration.from);
    const years = new Date(dur).getFullYear() - 1970;
    const months = new Date(dur).getMonth();
    let result = `${months} ${$pluralize(months, 'months')}`;
    if (years) {
      result = `${years} ${$pluralize(years, 'years')} ` + result;
    }
    return `(${result})`;
  }

  const durationString = derived(
    language,
    ($language) => (duration) => {
      const fromDate = localizeDate(duration.from);
      const toDate = localizeDate(duration.to);
      return `${$t('from')} ${fromDate} ${$t('to')} ${toDate} ${getDuration(duration)}`
    });
</script>

<section>
    <h2>{`${$t('projects.title')}:`}</h2>
    <div class="projects">
        {#each PROJECTS as project}
            <div class="project">
                <h5>{project.name}</h5>
                <h6>{`${$t('projects.stack')}:`}</h6>
                <ul class="project__stack">
                    {#each project.stack as tech}
                        <li class="project__tech">{tech.title}</li>
                    {/each}
                </ul>
                <h6>{`${$t('projects.description')}:`}</h6>
                <p>{project[`description_${lang}`]}</p>
                <h6>{`${$t('projects.tasks')}:`}</h6>
                <p>{project[`tasks_${lang}`]}</p>
                <h6>{`${$t('projects.duration')}:`}</h6>
                <p>{`${$durationString(project.duration)}`}</p>
            </div>
        {/each}
    </div>
</section>

<style>
  h6 {
    margin-top: 1em;
  }

  .projects {
    display: flex;
    flex-wrap: wrap;
    gap: 4em;
  }

  .project {
    width: 45%;
    padding: 2em;
    border: 1px solid var(--base-medium);
    border-radius: 3em;
  }

  .project__stack {
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
  }

  .project__tech {
    padding: 0.25em 0.5em;
    border: 1px solid var(--base-medium);
    border-radius: 1em;
  }
</style>