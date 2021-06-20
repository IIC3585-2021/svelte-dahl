<script>
    import API from "./Api"
    export let value = 'Nada'
    import { onMount } from 'svelte';
    


    onMount(async () => {
		let res = await API.getAll();
        res = res.data.data;
        const countries = Object.keys(res).map( elem => ({
            name: res[elem]['Country'],
            active_cases: res[elem]['Active Cases'],
            total_cases: res[elem]['Total Cases'],
            total_recoveres: res[elem]['Total Recovered'],
            total_deaths: res[elem]['Total Deaths'],
            total_tests: res[elem]['Total Tests'],
            population: res[elem]['Population'],
            }))
        console.log(countries);
        value = countries;
	    });
        
        
</script>

<h1>{value}</h1>