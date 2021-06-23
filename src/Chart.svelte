<script>

  import {MDBRow, MDBCol} from "mdbsvelte";
  import Bar from "svelte-chartjs/src/Bar.svelte"
	import { store } from './store';
	import { Circle } from 'svelte-loading-spinners'
  import _ from "lodash";

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

  let selection;

  $: {
    if ( $store.graphCountries != undefined && $store.graphCountries.length > 0) {

      selection = _.orderBy($store.data, [$store.selectedChart], ["desc"]).filter(country => country[$store.selectedChart] > 0).slice(0, 10);

      let filteredData = $store.data.filter((x) =>
        $store.graphCountries.includes(x.name)
      );

      selection.push.apply(selection, filteredData);
      
      selection = _.uniqBy(selection, "name");
      selection = _.orderBy(selection, [$store.selectedChart], ["desc"]);

    }
    else {
      selection = _.orderBy($store.data, [$store.selectedChart], ["desc"]).filter(country => country[$store.selectedChart] > 0).slice(0, 10);
      console.log('selection', selection);
    }
  }

  $: data = {
		labels: selection.map(x => x.name),
		datasets: [
			{
				label: `N° ${$store.selectedChart}`,
				data: selection.map(x => x[$store.selectedChart]),
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