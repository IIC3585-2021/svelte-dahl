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
        countriesInfo = Object.keys(res).map( elem => ({
            name: res[elem]['Country'],
            active_cases: res[elem]['Active Cases'],
            total_cases: res[elem]['Total Cases'],
            total_recovered: res[elem]['Total Recovered'],
            total_deaths: res[elem]['Total Deaths'],
            total_tests: res[elem]['Total Tests'],
            population: res[elem]['Population'],
        }))

        data = {
        labels: countriesInfo.map(x => x.name).slice(0, 6),
        datasets: [
            {
            label: "% of Active Cases",
            data: countriesInfo.map(x => parseFloat(x.active_cases)).slice(0, 6),
            borderWidth: 2
            }
        ]
        };

        console.log(countriesInfo[0]);
    
    });
  
  
  </script>
  <MDBRow>
    <MDBCol md="8" class="mx-auto">
      <Bar {data} {options} />
    </MDBCol>
  </MDBRow>