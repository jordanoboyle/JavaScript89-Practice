

// 4. Convert an array of objects into a nested object using multiple keys.
// Example: [{continent: "Asia", country: "Japan", city: "Tokyo"}, {continent: "Asia", country: "China", city: "Beijing"}] becomes {Asia: {Japan: ["Tokyo"], China: ["Beijing"]}}.

const continentArr = [{continent: "Asia", country: "Japan", city: "Tokyo"}, {continent: "Asia", country: "China", city: "Beijing"}];
const continentArr1 = [
  {continent: "Asia", country: "Japan", city: "Tokyo"}, 
  {continent: "Asia", country: "China", city: "Beijing"}, 
  {continent: "Europe", country: "England", city: "Manchester"}, 
  {continent: "Australia", country: "Australia", city: "Sydney"}];

function nestCountryCity(arrObjects) {
  let nestContinentObject = {};

  arrObjects.forEach(element => {
    let continent = element.continent;
    let country = element.country;
    let city = element.city;

    if ( nestContinentObject[continent] === undefined) {
      nestContinentObject[continent] = {};
      nestContinentObject[continent][country] = city;
    } else {
      nestContinentObject[continent][country] = city;
    }
  });
  return nestContinentObject;
}
console.log(nestCountryCity(continentArr));

console.log(nestCountryCity(continentArr1));
