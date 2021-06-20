<script>
    import MultiSelect from 'svelte-multiselect'
    export let countriesNames = [];
    countriesNames = ["USA", "India", "Brazil", "France", "Turkey", "Russia", "UK", "Argentina", "Italy", "Colombia", "Spain", "Germany", "Iran", "Poland", "Mexico", "Ukraine", "Peru", "Indonesia", "SouthAfrica", "Netherlands", "Czechia", "Chile", "Canada", "Philippines", "Iraq", "Sweden", "Romania", "Belgium", "Pakistan", "Portugal", "Bangladesh", "Israel", "Hungary", "Japan", "Jordan", "Serbia", "Switzerland", "Malaysia", "Austria", "Nepal", "UAE", "Lebanon", "Morocco", "SaudiArabia", "Ecuador", "Bulgaria", "Bolivia", "Greece", "Belarus", "Kazakhstan", "Paraguay", "Panama", "Slovakia", "Tunisia", "Croatia", "Georgia", "Uruguay", "CostaRica", "Kuwait", "Azerbaijan", "DominicanRepublic", "Palestine", "Denmark", "Guatemala", "Lithuania", "Egypt", "Ethiopia", "Ireland", "Bahrain", "Venezuela", "Slovenia", "Moldova", "Honduras", "Oman", "SriLanka", "Armenia", "Qatar", "Thailand", "BosniaandHerzegovina", "Libya", "Kenya", "Cuba", "Nigeria", "NorthMacedonia", "S.Korea", "Myanmar", "Latvia", "Algeria", "Albania", "Estonia", "Norway", "Zambia", "Kyrgyzstan", "Uzbekistan", "Afghanistan", "Montenegro", "Ghana", "Finland", "Mongolia", "Cameroon"]
    const name = `Countries`
    const placeholder = `Elige un país...`
    const required = true
  
    let selected
  </script>
  
  Favorite Web Frameworks?
  
  <MultiSelect bind:selected {name} {placeholder} options={countriesNames} {required} />