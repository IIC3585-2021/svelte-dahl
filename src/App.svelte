<script>
  import Chart from './Chart.svelte'
  import Table from './Table.svelte'
  import MultiSelect from './MultiSelect.svelte'

  const commonProps = {
		countriesInfo: []
	}
</script>

<div id="main">
  <div class="container">
    <div class="row mt-5">
      <div class="col">
        <h1 class="text-center">COVID-19 DATA</h1>
      </div>
    </div>
    <div style="width:100%">
      <Chart {...commonProps}/>
    </div>
    <div style="width:100%">
      <MultiSelect/>
      <Table {...commonProps}/>
    </div>
  </div>
</div>

<style>
  #main {
    display: block;
    align-items: center;
  }

  .container {
    margin: 0 auto;
    border: 5px;
  }
</style>