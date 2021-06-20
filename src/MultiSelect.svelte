<script>
    import MultiSelect from 'svelte-multiselect'
    import { store } from './store'
    let names = $store.countriesNames;
    names = ['Chile']
    const name = `Countries`
    const placeholder = `Elige un país...`
    const required = true
  
    let selected
  </script>
  
  Favorite Web Frameworks?
  
  <MultiSelect bind:selected {name} {placeholder} options={names} {required} />