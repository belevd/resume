<script>
  import Intro from "./Intro.svelte";
  import Stack from "./Stack.svelte";
  import {STACK} from "../config/index.ts";
  import Summary from "./Summary.svelte";
</script>

<section class="aboutMe">
    <div class="aboutMe__intro">
        <img class="aboutMe__photo" src='photo.jpg' alt="Evgenii Belolipetskii"/>
        <Intro/>
    </div>
    <Summary/>
    <Stack list={STACK}/>
</section>

<style>
  .aboutMe {
    width: 100%;
    animation: show 1s ease-in-out;
  }

  .aboutMe__intro {
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  .aboutMe__photo {
    width: 10rem;
    justify-self: center;
    align-self: flex-start;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }

  @media screen and (max-width: 1024px) {
    .aboutMe__intro {
      flex-direction: column;
    }
  }
</style>