<script>
	export let name;
	import Select from './Select.svelte'
	const commonProps = {
		value: 'Nada'
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
<Select {...commonProps}/>
