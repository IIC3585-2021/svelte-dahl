import App from './App.svelte';
import 'bootstrap/dist/css/bootstrap.min.css';

var app = new App({
	target: document.body,
	props:{
		name: 'Fer'
	}
});

export default app;