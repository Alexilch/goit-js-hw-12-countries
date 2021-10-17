// // import './sass/main.scss';
// // import './partials/js/fetchCountries'


// const refs = {
//     searchForm: document.querySelector('.search'),
//     searchResultContainer: document.querySelector('.js-search-result-container')
// }

// // const fetchCountries = new fetchCountries()

// refs.searchForm.addEventListener('submit', onSearch);

// function onSearch(e) {
//     e.preventDefault();

//     searchQuery = e.currentTarget.elements.query.value;
//     fetchCountries(searchQuery)
// }

 
// function fetchCountries(searchQuery){

//     const url = `https://restcountries.com/v2/name/${searchQuery}`
    
//     fetch(url)
//         .then(r => r.json())
//         .then(console.log)
//     }