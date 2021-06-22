<script>
  import MultiSelect from 'svelte-multiselect'
  import Select from 'svelte-select'
  import { store } from './store'
  import { Circle } from 'svelte-loading-spinners'
  const { updateGraphCountries, changeChart } = store;
  const name = `Countries`
  const placeholder1 = `Elige un gráfico...`
  const placeholder2 = `Elige un país...`
  const required = true

  let selected
  $: updateGraphCountries(selected);

  let selectedOption = undefined;

  const handleSelect = (event) => {
		selectedOption = event.detail;
    changeChart(selectedOption.value)
	}

</script>
  
{#if $store.data.length > 0}
  <Select items={$store.items} placeholder={placeholder1} on:select={handleSelect}></Select>
  <MultiSelect bind:selected {name} placeholder={placeholder2} options={$store.countriesNames} {required} />
{:else}
  <div class="container-spinner">
    <div style="margin: 0 auto;">
      <Circle size="60" color="#FF3E00" unit="px" duration="1s"></Circle>
    </div>
  </div>
{/if}

<style>
  .container-spinner {
    display: flex;
  }
</style>