import { writable } from "svelte/store";

function createStore() {
  const { subscribe, set, update } = writable({
    graphCountries: [],
    data: {},
    selectedChart: "total_cases",
    fetching: null,
  });
  return {
    subscribe,
    addCountry: (newCountry) => {
      console.log("addCountry");
      update((state) => {
        state.graphCountries = [newCountry, ...state.graphCountries];
        return state;
      });
    },
    deleteCountry: (country) => {
      console.log("deleteCountry");
      update((state) => {
        state.graphCountries = state.graphCountries.filter((elem) => elem !== country);
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
