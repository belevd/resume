<script>
  import Intro from "./Intro.svelte";
  import Stack from "./Stack.svelte";
  import {STACK} from "../config/index.ts";
</script>

<section>
    <Intro />
    <Stack list={STACK} />
</section>