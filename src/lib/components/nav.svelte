<script lang="ts">
  import { Button } from "bits-ui";
</script>
 

<div class="nav-card fixed top-0 left-1/2 z-50 mt-4 transform -translate-x-1/2 flex flex-row justify-center items-center gap-4 p-4">
<Button.Root
  class="rounded-input bg-dark shadow-mini hover:bg-dark/95 inline-flex
	h-12 items-center justify-center px-5.25 text-[15px]
	font-semibold active:scale-[0.98] active:transition-all"
href="#about-section">
  About
</Button.Root>
<Button.Root
  class="rounded-input bg-dark shadow-mini hover:bg-dark/95 inline-flex
	h-12 items-center justify-center px-5.25 text-[15px]
	font-semibold active:scale-[0.98] active:transition-all"
href="#top-section">
  <svg width="40px" height="20px" viewBox="20 -20 20 80" xmlns="http://www.w3.org/2000/svg" fill="#c6c6c6" stroke="#c6c6c6" stroke-width="8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.151606"></g><g id="SVGRepo_iconCarrier"> <g id="Group_66" data-name="Group 66" transform="translate(-619.375 -560.018)"> <path id="Path_58" data-name="Path 58" d="M695.178,596.248a1.5,1.5,0,0,1-2.561,1.061l-33.56-33.557a2.53,2.53,0,0,0-3.564,0l-33.558,33.557a1.5,1.5,0,0,1-2.121-2.121l33.557-33.557a5.531,5.531,0,0,1,7.808,0l33.559,33.557A1.494,1.494,0,0,1,695.178,596.248Z" fill="c6c6c6"></path> </g> </g></svg>
</Button.Root>
<Button.Root
  class="rounded-input bg-dark shadow-mini hover:bg-dark/95 inline-flex
	h-12 items-center justify-center px-5.25 text-[15px]
	font-semibold active:scale-[0.98] active:transition-all"
href="#projects-section">
  Projects
</Button.Root>

</div>

<style>
.nav-card{
    height: 20px;
    background: rgba(0, 0, 0, 0.35);
    border-radius: 1vw;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.9px);
    -webkit-backdrop-filter: blur(10.9px);
    border: var(--theme-white) 2px solid;
    gap: 1rem;
    padding: 1rem 0; 
    color: var(--theme-white);
}
</style>