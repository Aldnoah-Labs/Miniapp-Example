<script>
    import Title from './components/Todo__Title.svelte'
    import Form from './components/Todo__Form.svelte'
    import List from './components/Todo__List.svelte'
    import Item from './components/Todo__Item.svelte'

    const COMPLETED_FILTER = "completed"
    const NO_FILTER = "no_filter"
    
    let todos = [
        {
            id: 0,
            title: "Makan Ayam Goreng",
            checked: false
        },
        {
            id: 1,
            title: "Beli gundam",
            checked: true
        }
    ]

    let currentFilterStatus = NO_FILTER

    function addNew({detail}){
        todos = todos.concat({
				id: Date.now(),
				title: detail.value,
				checked: false
			});
    }

    function clearCompleted() {
        todos = todos.filter(todo => todo.checked !== true)
    }

    function removeItem(id){
        todos = todos.filter(todo => todo.id !== id)
    }

    function changeFilteredStatus(status) {
        currentFilterStatus = status
    }
    

    // Listener State
    $: filteredItems =
        currentFilterStatus === COMPLETED_FILTER
                ? todos.filter(todo => todo.checked === true)
                : todos
    
        
</script>

<main class="m-auto max-w-md w-full overflow-hidden">
    <Title title={"Simple Todo Svelte"}/>
    <Form on:submit={addNew} />
      <List>
            {#each filteredItems as todo}
                    <Item title={todo.title} checked={todo.checked} on:remove={() => removeItem(todo.id)} />
            {/each}
      </List>
      <div class="flex py-4 border-t border-gray-900 justify-between">
       <div class="flex">
            <button id="js-filter-all" class="{currentFilterStatus === NO_FILTER ? 'font-bold text-green-500' : 'text-gray-500'} text-xs mr-3  hover:underline  focus:outline-none" on:click={() => changeFilteredStatus(NO_FILTER)}>All</button>
            <button id="js-filter-clear" class="{currentFilterStatus === COMPLETED_FILTER ? 'font-bold text-green-500' : 'text-gray-500'} text-xs mr-3  hover:underline  focus:outline-none"  on:click={() => changeFilteredStatus(COMPLETED_FILTER)}>Completed</button>
       </div>
       <div class="flex">
            <button id="js-filter-clear" class="text-xs mr-3 text-red-500 focus:outline-none hover:underline" on:click={() => clearCompleted()}>Clear Completed</button>
       </div>
      </div>
</main>