export default class fetchCountries {
  constructor() {
  this.searchQuery = '';
  }
  fetchCountries() {
    return fetch(`https://restcountries.com/v2/name/${this.searchQuery}`)
    .then(response => {
      if (response.status === 200) {
        return response.json()
      } else {
      throw new Error(response.status)
      }
    })
    .then(data => {
      return data;
    })
    .catch(Error)
  }

  set country(newCountry) {
    this.searchQuery = newCountry;
  }

  get country() {
    return this.country;
  }
}
