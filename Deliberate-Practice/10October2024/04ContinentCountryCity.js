// 10. Convert an array of objects into a nested hash based on multiple keys.
// Example: [{continent: "North America", country: "USA", city: "New York"}, {continent: "Europe", country: "Germany", city: "Berlin"}] becomes {"North America": {"USA": ["New York"]}, "Europe": {"Germany": ["Berlin"]}}.

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


function convertToNestedHash(arrCities) {
  let nestedCityData = {};

  arrCities.forEach(element => {
    let continent = element["continent"];
    let country = element["country"];
    let city = element["city"]

    // console.log(continent, country);

    if (!nestedCityData[continent]) {
      nestedCityData[continent] = {};
    }

    if (!nestedCityData[continent][country]) {
      nestedCityData[continent][country] = [];
    }

    nestedCityData[continent][country].push(city);
  });
  console.log(nestedCityData);
}

convertToNestedHash(citiesArray);