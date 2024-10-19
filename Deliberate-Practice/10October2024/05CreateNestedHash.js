const citiesArray = [
  // North America
  { continent: "North America", country: "USA", city: "New York" },
  { continent: "North America", country: "USA", city: "Los Angeles" },
  { continent: "North America", country: "USA", city: "Chicago" },
  { continent: "North America", country: "Canada", city: "Toronto" },
  { continent: "North America", country: "Canada", city: "Vancouver" },
  { continent: "North America", country: "Mexico", city: "Mexico City" },
  { continent: "North America", country: "Mexico", city: "Guadalajara" },
  
  // Europe
  { continent: "Europe", country: "Germany", city: "Berlin" },
  { continent: "Europe", country: "Germany", city: "Munich" },
  { continent: "Europe", country: "France", city: "Paris" },
  { continent: "Europe", country: "France", city: "Lyon" },
  { continent: "Europe", country: "United Kingdom", city: "London" },
  { continent: "Europe", country: "United Kingdom", city: "Manchester" },

  // Asia
  { continent: "Asia", country: "Japan", city: "Tokyo" },
  { continent: "Asia", country: "Japan", city: "Osaka" },
  { continent: "Asia", country: "China", city: "Beijing" },
  { continent: "Asia", country: "China", city: "Shanghai" },
  { continent: "Asia", country: "India", city: "Mumbai" },
  { continent: "Asia", country: "India", city: "Delhi" }
];

//Combine the countries to look something similar to this given nested Hash
//{"North America": {"USA": ["New York"]}, "Europe": {"Germany": ["Berlin"]}}.

function createNestedCityHash(arrCity) {
  let newNestedCityHash = {};

  arrCity.forEach(element => {
    let continent = element["continent"];
    let country = element["country"];
    let city = element["city"];

    if (!newNestedCityHash[continent]) {
      newNestedCityHash[continent] = {};
    }
    //It is important to recognize that ! is an operator that basically
    //is an newNestedCityHash[continent] === undefined. JS has little quarks like that.

    if (!newNestedCityHash[continent][country]) {
      newNestedCityHash[continent][country] = [];
    }
    //Here we are constructing the nested Object as we go along. 

    newNestedCityHash[continent][country].push(city);
  });
  console.log(newNestedCityHash);
}


createNestedCityHash(citiesArray);