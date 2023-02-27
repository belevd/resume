<script lang="ts">
  import Header from "./app/ui/Header.svelte";
  import AboutMe from "./lib/AboutMe.svelte";
  import Projects from "./lib/Projects.svelte";
  import {onMount} from "svelte";
  import RevealContainer from "./shared/ui/RevealContainer.svelte";

  onMount(() => {
    function reveal() {
      let reveals = document.querySelectorAll(".reveal");

      for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    }

    window.addEventListener("scroll", reveal);
  })
</script>

<main>
    <Header />
    <div class="app">
        <RevealContainer active={true}>
            <AboutMe />
        </RevealContainer>
        <RevealContainer>
            <Projects />
        </RevealContainer>
    </div>
</main>

<style>
    .app {
      padding: 2rem;
    }
</style>