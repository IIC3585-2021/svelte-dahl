<script>
    import API from "./Api"
    export let countriesInfo = '';
    import { onMount } from 'svelte';
    import SvelteTable from "svelte-table";

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
        countriesInfo = Object.keys(res).map( elem => ({
            name: res[elem]['Country'],
            active_cases: res[elem]['Active Cases'],
            total_cases: res[elem]['Total Cases'],
            total_recovered: res[elem]['Total Recovered'],
            total_deaths: res[elem]['Total Deaths'],
            total_tests: res[elem]['Total Tests'],
            population: res[elem]['Population'],
        }))
    });
        
        
</script>
<h2>Información países</h2>
<SvelteTable hover columns="{columns}" rows="{countriesInfo}"></SvelteTable>
