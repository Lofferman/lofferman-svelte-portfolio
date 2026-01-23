<script lang="ts">
  import { Button } from "bits-ui";
</script>
 

<div class="nav-card fixed top-0 left-1/2 z-50 mt-4 transform -translate-x-1/2 flex flex-row justify-center items-center gap-4 p-4">
<Button.Root
  class="rounded-input bg-dark text-white shadow-mini hover:bg-dark/95 inline-flex
	h-12 items-center justify-center px-5.25 text-[15px]
	font-semibold active:scale-[0.98] active:transition-all"
href="#about-section">
  About
</Button.Root>
<Button.Root
  class="rounded-input bg-dark text-white shadow-mini hover:bg-dark/95 inline-flex
	h-12 items-center justify-center px-5.25 text-[15px]
	font-semibold active:scale-[0.98] active:transition-all"
href="#projects-section">
  Projects
</Button.Root>

</div>

<style>
.nav-card{
  height: 20px;
background-color: black;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: white 2px solid;
    gap: 1rem;
    padding: 1rem 0; 
}
</style>