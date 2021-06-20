<script>
	export let name;
	import Table from './Table.svelte'
  import MultiSelect from './MultiSelect.svelte'

	
</script>

<div class="container">
    <div class="row mt-5">
      <div class="col">
        <h1 class="text-center">COVID-19 DATA</h1>
      </div>
    </div>
  </div>
<h1>Hello {name}!</h1>
<MultiSelect/>
<Table/>

