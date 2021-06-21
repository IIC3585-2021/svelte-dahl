<script>
	export let name;
  import Chart from './Chart.svelte'
  import Table from './Table.svelte'
  import MultiSelect from './MultiSelect.svelte'

  const commonProps = {
		countriesInfo: []
	}
</script>

<div class="container">
    <div class="row mt-5">
      <div class="col">
        <h1 class="text-center">COVID-19 DATA</h1>
      </div>
    </div>
  </div>
  <div style="width:50%">
    <Chart {...commonProps}/>
  </div>
  <div style="width:50%">
    <MultiSelect/>
    <Table {...commonProps}/>
  </div>
<h1>Hello {name}!</h1>
