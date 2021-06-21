<script>
    import MultiSelect from 'svelte-multiselect'
    import { store } from './store'
    import { Circle } from 'svelte-loading-spinners'
    const { updateGraphCountries } = store;
    const name = `Countries`
    const placeholder = `Elige un país...`
    const required = true
    
    let selected
    $: updateGraphCountries(selected);
  </script>
  
  Favorite Web Frameworks?
{#if $store.data.length > 0}
  <MultiSelect bind:selected {name} {placeholder} options={$store.countriesNames} {required} />
{:else}
    <Circle size="60" color="#FF3E00" unit="px" duration="1s"></Circle>
{/if}
  