<script>
  import API from "./Api"
  import { onMount } from 'svelte';
  import SvelteTable from "svelte-table";
  import { store } from './store';
  import { Circle } from 'svelte-loading-spinners'
  const { addData, addNames } = store;
  const columns = [
    {
			key: "name",
			title: "País",
			value: v => v.name,
			sortable: true,
		},
		{
			key: "population",
			title: "Población",
			value: v => v.population,
			sortable: true,
		},
		{
			key: "total_cases",
			title: "Casos totales",
			value: v => v.total_cases,
			sortable: true,
		},
		{
			key: "active_cases",
			title: "Casos activos",
			value: v => v.active_cases,
			sortable: true,
		},
		{
			key: "total_recovered",
			title: "Recuperados totales",
			value: v => v.total_recovered,
			sortable: true,
		},
		{
			key: "total_deaths",
			title: "Fallecidos totales",
			value: v => v.total_deaths,
			sortable: true,
		},
		{
			key: "total_tests",
			title: "Pruebas totales",
			value: v => v.total_tests,
			sortable: true,
		},
  ];
  onMount(async () => {
		let res = await API.getAll();
    res = res.data.data;
    
    const countriesInfo = Object.keys(res)
      .filter(elem => res[elem]['Country'] != "World")
      .map( elem => ({
        name: res[elem]['Country'],
        active_cases: parseFloat(res[elem]['Active Cases'].replace(/,/g, '')),
        total_cases: parseFloat(res[elem]['Total Cases'].replace(/,/g, '')),
        total_recovered: parseFloat(res[elem]['Total Recovered'].replace(/,/g, '')),
        total_deaths: parseFloat(res[elem]['Total Deaths'].replace(/,/g, '')),
        total_tests: parseFloat(res[elem]['Total Tests'].replace(/,/g, '')),
        population: parseFloat(res[elem]['Population'].replace(/,/g, '')),
      }))
    addData(countriesInfo);

    const names = countriesInfo.map(country => country.name);
    addNames(names);
  });

  let selection = [];
  $: {
    if ($store.graphCountries.length > 0) {
      selection = $store.data.filter((elem) => $store.graphCountries.includes(elem.name));
    }
    else {
      selection = $store.data;
    }}

</script>
<h2>Información países</h2>

{#if $store.data.length > 0}
  <SvelteTable 
    columns="{columns}" 
    rows="{selection}"
    classNameTable={['table table-dark']}
    classNameThead={['thead-light']}
    classNameSelect={['custom-select']}>
  </SvelteTable>
  
{:else}
  <div class="spinner">
    <Circle  size="60" color="#FF3E00" unit="px" duration="1s"></Circle>
  </div>
{/if}
