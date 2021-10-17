import './sass/main.scss';

import { alert, notice, info, success, error } from "@pnotify/core";
import '@pnotify/core/dist/BrightTheme.css';
import "@pnotify/core/dist/PNotify.css";
import fetchCountries from './partials/js/fetchCountries';
import countryMarkup from './templates/country.hbs';
import countriesListMarkup from './templates/list.hbs'
import debounce from "lodash.debounce";

const refs = {
  searchBar: document.querySelector('.search-input'),
  cardContainer: document.querySelector('.js-result-container')
}

refs.searchBar.addEventListener('input', debounce(onSearch, 500))

const fetchCountry = new fetchCountries();

function onSearch(event) {
  fetchCountry.country = event.target.value;

  if (fetchCountry.searchQuery === '') {
    refs.cardContainer.innerHTML = '';
    return
  }
  
  fetchCountry.fetchCountries()
  .then(verifySearchResult)
  .catch(notFound)
}

function verifySearchResult(searchQuery) {
  const  result = searchQuery.length;
    if (result > 10) {
      return tooManyResults();
    }
    if (result >= 2 && result <= 10) {
      return renderList(searchQuery)
    }
    if (result === 1) {
      return renderCountry(searchQuery)
    }
    else {
      return notFound()
    }
  }

function renderCountry(searchQuery) {
refs.cardContainer.innerHTML = countryMarkup(...searchQuery)
}

function renderList(searchQuery) {
  refs.cardContainer.innerHTML = countriesListMarkup(searchQuery)
}

function notFound() {
    error({
      text: "Not found",
      delay: 1500,
    });
  }

function tooManyResults() {
  notice({
    text: "Too many matches found!",
    delay: 1500,
  });
}

//   function clearForm() {
//       refs.inputSearch = ''
//   }