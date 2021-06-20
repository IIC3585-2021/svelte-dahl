<script>
	export let name;
	import Table from './Table.svelte'
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
<h1>Hello {name}!</h1>
<Table {...commonProps}/>
