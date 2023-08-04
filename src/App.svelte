<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import runeLogo from "./assets/rune.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";

  import { game } from "./store";
  import { onMount } from "svelte";

  onMount(() => {
    Rune.initClient({
      onChange: ({ newGame }) => {
        game.set(newGame);
      },
    });
  });
</script>

{#if !$game}
  <div>Loading...</div>
{:else}
  <main>
    <div>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} class="logo" alt="Vite Logo" />
      </a>
      <a href="https://svelte.dev" target="_blank" rel="noreferrer">
        <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
      </a>
      <a
        href="https://developers.rune.ai/docs/quick-start/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={runeLogo} class="logo rune" alt="Svelte Logo" />
      </a>
    </div>
    <h1>Vite + Svelte + Rune</h1>

    <div class="card">
      count is {$game.count}
      <!-- svelte-ignore missing-declaration -->
      <button on:click={() => Rune.actions.increment({ amount: 1 })}>
        Increment Count By 1
      </button>
      <!-- svelte-ignore missing-declaration -->

      <button on:click={() => Rune.actions.decrement({ amount: 1 })}>
        Decrement count By 1
      </button>
    </div>

    <p />

    <p class="read-the-docs">
      Click on the Vite and Svelte logos to learn more
    </p>
  </main>
{/if}

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .logo rune:hover {
    filter: drop-shadow(0 0 2em #9b51e0);
  }
  .read-the-docs {
    color: #888;
  }
</style>
