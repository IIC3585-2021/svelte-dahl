import { writable } from "svelte/store";

function createStore() {
  const { subscribe, set, update } = writable({
    graphCountries: [],
    countriesNames: [],
    data: [],
    selectedChart: "active_cases",
    fetching: null,
    items: [
      {value: 'active_cases', label: 'Casos Activos'},
      {value: 'total_cases', label: 'Casos Totales'},
      {value: 'population', label: 'Población'},
      {value: 'total_recovered', label: 'Total de Recuperados'},
      {value: 'total_deaths', label: 'Total de Fallecidos'},
      {value: 'total_tests', label: 'Total de Testeados'}
    ],
  });
  return {
    subscribe,
    addData: (data) => {
      update((state) => {
        state.data = data;
        return state; 
      }
    )},
    addNames: (countriesNames) => {
      update((state) => {
        state.countriesNames = countriesNames;
        return state; 
      }
    )},
    updateGraphCountries: (newCountry) => {
      console.log("updateGraphCountries");
      update((state) => {
        state.graphCountries = newCountry;
        return state;
      });
    },
    changeChart: (selectedChart) => {
      console.log("changeChart");
      update((state) => {
        state.selectedChart = selectedChart;
        return state;
      });
    },
    updateFetching: (fetching) => {
      console.log("updateFetching");
      update((state) => {
        state.fetching = fetching;
        return state;
      });
    },
  };
}

export const store = createStore();
