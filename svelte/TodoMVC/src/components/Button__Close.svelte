<script>
    import {createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()
</script>

<style>
.close-icon-container .close-icon {
  display: inline-block;
  height: 18px;
  width: 18px;
  cursor: pointer;
  stroke: #fff;
}
.close-icon-container .close-icon .circle {
  opacity: 0.1;
}
.close-icon-container .close-icon .progress {
  opacity: 0;
  stroke-dasharray: 0,120;
  -webkit-transition: 0.5s cubic-bezier(0.165, 0.775, 0.145, 1.02);
  transition: 0.5s cubic-bezier(0.165, 0.775, 0.145, 1.02);
}


</style>

<button on:click={() => dispatch("click")}>
<div class="close-icon-container">
  <span class="close-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" enable-background="new 0 0 40 40">
      <line x1="15" y1="15" x2="25" y2="25" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10"></line>
      <line x1="25" y1="15" x2="15" y2="25" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10"></line>    
      <circle class="circle" cx="20" cy="20" r="19" opacity="0" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10" fill="none"></circle>
      <path d="M20 1c10.45 0 19 8.55 19 19s-8.55 19-19 19-19-8.55-19-19 8.55-19 19-19z" class="progress" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10" fill="none"></path>
    </svg>
  </span>
</div>
</button>
