<script>
  import Intro from "./Intro.svelte";
  import Stack from "./Stack.svelte";
  import {STACK} from "../config/index.ts";
  import Summary from "./Summary.svelte";
</script>

<section class="aboutMe">
    <div class="aboutMe__intro"><Intro/></div>
    <div>
        <Summary/>
        <Stack list={STACK}/>
    </div>
    <img class="aboutMe__photo" src='photo.jpg' alt="Evgenii Belolipetskii" />
</section>

<style>
    .aboutMe {
      width: 100%;
      display: grid;
      grid-template-columns: 60% calc(40% - 5em);
      gap: 0 5em;
    }

    .aboutMe__intro {
      grid-column: 1 / 3;
    }

    .aboutMe__photo {
      width: 90%;
      justify-self: center;
      align-self: center;
    }
</style>