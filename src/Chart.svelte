<script>

  import {MDBRow, MDBCol} from "mdbsvelte";
  import Bar from "svelte-chartjs/src/Bar.svelte"
	import { store } from './store';
	import { Circle } from 'svelte-loading-spinners'

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

  $: data = {
		labels: $store.countriesNames.slice(0, 5),
		datasets: [
			{
				label: "% of Active Cases",
				data: $store.data.map(x => x.active_cases).slice(0, 5),
				borderWidth: 2
			}
		]
	};
</script>


{#if $store.data.length > 0}
  <MDBRow>
    <MDBCol md="8" class="mx-auto">
    <Bar {data} {options} />
    </MDBCol>
  </MDBRow>
{:else}
  <Circle size="60" color="#FF3E00" unit="px" duration="1s"></Circle>
{/if}