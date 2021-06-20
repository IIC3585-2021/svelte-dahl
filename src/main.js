import App from './App.svelte';
import axios from "axios";

var app = new App({
	target: document.body,
	props:{
		name: 'Fer'
	}
});

export default app;