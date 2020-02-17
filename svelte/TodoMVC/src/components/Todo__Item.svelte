<script>
import ButtonClose from './Button__Close'
import {createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher()

export let checked = false
export let title = ""
</script>

<li class="relative flex justify-between mb-4">
    <label class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox" bind:checked={checked}>
        <span class="ml-2">{title}</span>
    </label>
    <ButtonClose on:click={() => dispatch("remove")} />
</li>