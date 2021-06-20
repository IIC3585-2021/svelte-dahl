<script>

    import {MDBRow, MDBCol} from "mdbsvelte";
    import Bar from "svelte-chartjs/src/Bar.svelte"

    import API from "./Api"
    export let countriesInfo = '';
    import { onMount } from 'svelte';


    let data;
    let options = {
        responsive: true,
        scales: {
            xAxes: [
            {
                barPercentage: 1,
                gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
                }
            }
            ],
            yAxes: [
            {
                gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
                },
                ticks: {
                beginAtZero: true
                }
            }
            ]
        }
    }; 

    onMount(async () => {
		let res = await API.getAll();
        res = res.data.data;
        countriesInfo = Object.keys(res)
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

        data = {
        labels: countriesInfo.map(x => x.name).slice(0, 5),
        datasets: [
            {
            label: "% of Active Cases",
            data: countriesInfo.map(x => parseFloat(x.active_cases)).slice(0, 5),
            borderWidth: 2
            }
        ]
        };

        console.log(countriesInfo.slice(0, 2));
    
    });
  
  
  </script>
  <MDBRow>
    <MDBCol md="8" class="mx-auto">
      <Bar {data} {options} />
    </MDBCol>
  </MDBRow>