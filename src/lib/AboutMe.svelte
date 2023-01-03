<script>
  import Intro from "./Intro.svelte";
  import Stack from "./Stack.svelte";
  import {STACK} from "../config/index.ts";
  import Summary from "./Summary.svelte";
</script>

<section class="aboutMe">
    <div class="aboutMe__intro">
        <Intro/>
    </div>
    <div class="aboutMe__description">
        <Summary/>
        <Stack list={STACK}/>
    </div>
    <img class="aboutMe__photo" src='photo.jpg' alt="Evgenii Belolipetskii"/>
</section>

<style>
  .aboutMe {
    width: 100%;
    display: grid;
    grid-template-columns: 60% calc(40% - 5em);
    gap: 0 5em;
    animation: show 1s ease-in-out;
  }

  .aboutMe__intro {
    grid-column: 1 / 3;
    order: 0;
  }

  .aboutMe__description {
    order: 2;
  }

  .aboutMe__photo {
    width: 90%;
    justify-self: center;
    align-self: center;
    order: 3;
  }

  @media (max-width: 1024px) {
    .aboutMe {
      display: flex;
      flex-direction: column;
    }

    .aboutMe__photo {
      order: 1;
      width: 300px;
      align-self: flex-start;
    }
  }
</style>