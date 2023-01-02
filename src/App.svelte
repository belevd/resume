<script lang="ts">
  import Intro from "./lib/Intro.svelte";
  import Header from "./lib/Header.svelte";
  import Stack from "./lib/Stack.svelte";
  import {STACK} from "./config/index.ts";
</script>

<main>
    <Header />
    <Intro />
    <Stack list={STACK} />
</main>

<style>
</style>