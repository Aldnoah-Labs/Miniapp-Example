<script>
    import {createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()
    const ENTER_KEY = 13;

    let textFieldValue = ""

    function onKeyDown() {
        if (event.which === ENTER_KEY) {
			dispatch("submit",{
			value: event.target.value
            })
		textFieldValue = ""
    }
    }

    // 
</script>


<template lang="pug">
    .w-full
      input(
      type="text" 
      placeholder="Makan nasi goreng" 
      bind:value="{textFieldValue}" 
      on:keydown="{onKeyDown}"
      class="bg-gray-200 appearance-none.border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500")
</template>