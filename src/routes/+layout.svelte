<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/components/nav.svelte';
  import { onDestroy, onMount } from "svelte";

let { children, data } = $props();

  let svgEl;
  let timelines = [];

onMount(async () => {
    const gsap = (await import("gsap")).default;
    const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
    const ScrambleTextPlugin = (await import("gsap/ScrambleTextPlugin")).ScrambleTextPlugin;
    const DrawSVGPlugin = (await import("gsap/DrawSVGPlugin")).DrawSVGPlugin;
    const MotionPathPlugin = (await import("gsap/MotionPathPlugin")).MotionPathPlugin;

    gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin, DrawSVGPlugin, MotionPathPlugin);

    ScrollTrigger.normalizeScroll(true);

    const paths = svgEl.querySelectorAll(".mask");

    paths.forEach((path, i) => {
      const svg = path.ownerSVGElement;

      const bbox = svgEl.getBBox();

      svgEl.setAttribute(
        "viewBox",
        `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`    
      );

      
      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );

      circle.setAttribute("r", "5");
      circle.setAttribute("fill", "lime");
      circle.setAttribute("filter", "url(#glow)");

      svg.appendChild(circle);

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 2,
        yoyo: true,
        delay: i * 0.25,
        defaults: { ease: "power1.inOut" }
      });

      tl.fromTo(
        path,
        { drawSVG: "0% 0%" },
        {
          drawSVG: "0% 100%",
          duration: 6
        }
      );

      tl.fromTo(
        circle,
        {
          motionPath: {
            path,
            align: path,
            alignOrigin: [0.5, 0.5],
            start: 0,
            end: 0
          }
        },
        {
          motionPath: {
            path,
            align: path,
            alignOrigin: [0.5, 0.5],
            start: 0,
            end: 1
          },
          duration: 6
        },
        0
      );

      // glow pulse
      gsap.to(circle, {
        scale: 1.4,
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        ease: "sine.inOut"
      });

      timelines.push(tl);
    });
  });

  onDestroy(() => {
    timelines.forEach((tl) => tl.kill());
  });
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="layout md:px-2 px-0">
<div id="box"> 
  <svg  bind:this={svgEl} id="stage" class="portrait:h-dvh landscape:w-[120%]" preserveAspectRatio="xMidYMid meet">
  <defs>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
			<path class="mask" d="M895.65,957.84c0,135.02,121.03,149.86,363.71,207.41,242.67,57.55,431.04,270.74,656.14,270.74s309.58-271.82,309.58-478.15c0-267.54-233.2-414.15-361.12-414.15s-150.83,15.01-389.96,147.83c-239.13,132.82-578.35,87.81-578.35,266.33Z" style="fill:none; stroke:#FFFFFF; stroke-miterlimit:10; stroke-width: 2px;"/>
      <path class="mask" d="M1273.61,935.85c-32.09,69.2,267.75,124.63,339.24,132.1,128.51,7.49,196.97-41.24,196.97-113.57,0-93.15-101.55-187.4-247.56-111-146.01,76.4-262.14,42.12-288.65,92.47Z" style="fill:none; stroke:FFFFFF; stroke-miterlimit:10;"/>
      <path class="mask" d="M1018.81,541.99c-6.57,84.83-105.68,171.84-224.68,263.43-119,91.59-311.22,159.62-232.05-17.29,46.11-91.42-5.84-328.31,184.17-243.51,134.15,83.7,283.92-112.63,272.56-2.63Z" style="fill:none; stroke:#FFFFFF; stroke-miterlimit:4; stroke-width:1px;"/>
      <path class="mask" d="M915.75,613.58c-3.23,26.56-30.26,60.36-78.96,89.81-48.7,29.45-131.76,52.96-107.25-9.73,14.65-36.75-.14-102.6,76.06-77.39,62.25,9.57,115.48-37.15,110.15-2.69Z" style="fill:none; stroke:#FFFFFF; stroke-miterlimit:4; stroke-width:1px;"/>
      <path class="mask" d="M1089.99,951.22c-55.62,89.51,178.21,131.14,415.89,185.16,289.16,67.92,544.53,85.95,544.53-161.74,0-158.93-171.52-417.4-431.55-233.22-260.03,184.18-487.99,143.31-528.87,209.81Z" style="fill:none; stroke:#FFFFFF; stroke-miterlimit:10;"/>
      <path class="mask" d="M1458.89,928.16c-12.03,19.93,100.3,35.89,127.09,38.04,48.14,2.16,73.79-11.88,73.79-32.7,0-26.82-38.04-53.96-92.74-31.96-54.7,22-98.2,12.13-108.13,26.62Z" style="fill:none; stroke:#FFFFFF; stroke-miterlimit:10;"/>
      <path class="mask" d="M1220.15,1630.32c-185.04-147.6-424.56-359.78-386.57-442.05,12.02-23.23,71.29,42.5,149.84,106.06,155.37,116.71,387.52,152.64,504.67,327,117.15,174.36-82.89,156.59-267.94,8.99Z" style="fill:none; stroke:#FFFFFF;"/>
      <path class="mask" d="M1204.53,362.33c39.29,61.39-136.54,337.88-363.11,494.97-125.99,79.89-186.16,194.79-185.93,319.07,.35,192.74,131.79,401.21,127.45,579.47-3.74,154.06-194.23,419.45-363.25,419.52-154.44,.07-876.52-134.98-875.73-315.28,1.75-400.95,709.19-562.14,841.28-968.89,90.42-208.2,22.99-548.65,304.97-558.37,122.03-4.21,149.66,66.54,287.15,61.22,125.36-4.84,181-105.05,227.17-31.71Z" style="fill:none; stroke:#FFFFFF; stroke-miterlimit:4; stroke-width:1px;"/>
      <path class="mask" d="M2674.55,128.59s-159.03-110.37-419.71-110.34c-335.01-2.97-596.62,211.6-716.88,211.62-84.55,.01,14.9-308.29-202.03-251.89-216.92,56.41-266.71,106.63-332.86,109.3-66.15,2.67,139.52-149.32,139.52-149.32" style="fill:none; stroke:#FFFFFF; stroke-miterlimit:4; stroke-width:1px;"/>
      <path class="mask" d="M502.67,978.25c-25.42,0-120.47,162.3-170.31,333.56-53.79,184.84-356.28,628.74-24.59,629.91,379.31,1.34,241.47-602.95,227.45-696.49-14.02-93.53,20.3-266.98-32.55-266.98Z" style="fill:none; stroke:#FFFFFF;"/>
      <path class="mask" d="M1096.47,1856.93c-103.83-62.6-158.85-221.17-193.39-221.17s61.71,201.56,77.99,285.86" style="fill:none; stroke:#FFFFFF;"/>
      <path class="mask" d="M-60.89,1794.07c17.56-196.42,203.46-410.78,185.62-440.34-17.84-29.56-250.76,233.81-362.42,317.68" style="fill:none; stroke:#FFFFFF; stroke-miterlimit:4; stroke-width:1px;"/>
      <path class="mask" d="M732.3-66.61c210.1,0-81.15,262.78,127.62,296.23,182.31,35.27,493.69-207.44,494.14-5.75,.46,201.69-109.35,364.3-38.26,364.3,147.28,0,376.09-294.8,789.08-294.8,515.95,0,575.64,573.17,573.13,869.24-3.01,355.28-218.24,607.29-552.51,607.29-302.92,0-609.62-374.63-938.6-476.45-328.99-101.82-350.66-261.91-381.81-261.49-31.15,.42-52.46,66.4-51.36,142.35,1.1,75.95,44.28,245.32,212.55,390.76,168.27,145.44,285.1,340.88,491.47,340.88s212.34-54.28,294.55-54.28,216.67,31.46,497.43,31.46,448.63-216.96,448.63-216.96" style="fill:none; stroke:#FFFFFF;"/>
      <path class="mask" d="M458.59,1253.4c-2.92,.05-19.3,85.47-49.33,158.88-29.06,71.01-72.35,130.05-36.94,130.47,30.16,.36,63.52-19.38,77.32-71.24,19.02-71.47,14.72-218.2,8.95-218.12Z" style="fill:none; stroke:#FFFFFF;"/>
      <path class="mask" d="M212.91,456.05c34.74-2.8-26.8,69.51-63.27,163.57C81.04,796.52,23.08,969.99-48.63,967.54c-15.59-.53-33.74-11.49-33.93-51.22-.81-171.54,194.27-452.11,295.47-460.27Z" style="fill:none; stroke:#FFFFFF; stroke-miterlimit:4; stroke-width:1px;"/>
      <path class="mask" d="M461.79,189.98c88.26-3.48-92.63,137.73-168.41,501.55-49.46,203.8-171.53,586.54-529.24,586.54-38.88-2.34-64.03-44.75-64.03-125.19,0-382.56,415.27-949.24,761.67-962.9Z" style="fill:none; stroke:#FFFFFF;"/>
      <path class="mask" d="M-321.28,465.26C-93.97,404.35,29.61,180.42,276.05,62.55c246.44-117.87,288.86,46.7,361.19,66.08,72.34,19.38,1.48-269.93-191.7-269.93S254.92,66.32-198.96,194.1" style="fill:none; stroke:#FFFFFF;"/>
	</svg>
</div>
<div class="page-container grid grid-cols gap-4 w-dvw md:w-[80vw]" >
      <Nav></Nav>
    <section class="info-center col w-auto max-w-100 md:max-w-[80vw]">
        {@render children()}
    </section>
</div>
</div>

<style>

  #stage {
    position: fixed;
    top: 0;
    left: -10%;
}
	.layout {
    position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
    width: 100%;
    height: 100%;
		background: linear-gradient(rgba(0, 0, 0, 0.918), rgba(0, 0, 0, 0.5));
    /* url('../lib/assets/topo3.png');  */
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