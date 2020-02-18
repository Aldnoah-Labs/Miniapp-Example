<script>
import ButtonClose from './Button__Close'
import {createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher()

export let checked = false
export let title = ""
</script>

<template lang="pug">
    li.relative.flex.justify-between.mb-4
        label.inline-flex.items-center
            input(type="checkbox" bind:checked="{checked}").form-checkbox
            span.ml-2
                | {title}
        ButtonClose(on:click!="{() => dispatch('remove')}")
</template>