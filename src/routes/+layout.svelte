<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/components/nav.svelte';
  import { onMount } from "svelte";

let { children, data } = $props();


onMount(async () => {
    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
    const ScrambleTextPlugin = (await import("gsap/ScrambleTextPlugin")).ScrambleTextPlugin;

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrambleTextPlugin);

    ScrollTrigger.normalizeScroll(true);
  });
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="layout md:px-2 px-0">

<div class="page-container grid grid-cols gap-4 w-dvw md:w-[80vw]" >
      <Nav></Nav>
    <section class="info-center col w-auto max-w-100 md:max-w-[80vw]">
        {@render children()}
    </section>
</div>
</div>

<style>
	.layout {
    position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
    width: 100%;
    height: 100%;
		background-color: #1b542b;
		background: linear-gradient(rgba(0, 0, 0, 0.918), rgba(0, 0, 0, 0.5)), url('../lib/assets/topo3.png'); 
		background-blend-mode: overlay;
    background-attachment: fixed;
	}
  .page-container {
    position: relative;
    background-color: rgba(0, 0, 0, 0.842);
    border-left: 1px solid rgba(128, 128, 128, 0.473);
    border-right: 1px solid rgba(128, 128, 128, 0.473);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    min-height: 100vh;
    /* width: 80vw;
    max-width: 1200px; */
    margin: 0 auto;
    padding: 2rem 0;
  }
  .info-center {
    margin-top: 10rem;
    place-self: center;
  }

</style>