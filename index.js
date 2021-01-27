let countries = " ";
const Form = document.querySelector("form");
Form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    countries = document.querySelector("input").value.trim();
    fetchResult(countries);
  });
  const fetchResult = (countries) => {
    fetch(`https://restcountries.eu/rest/v2/name/${countries}`)
      .then((res) => {
        res.json().then((data) => {
          result(data);
        });
      })
      .catch((err) => result(err));
  };
  const result = (data) => {
    const SHOW = document.querySelector(".result");
    const i = data[0];
  let name1 = i.name;
  let callingCodes1 = i.callingCodes;
  let capital1 = i.capital;
  let region1 = i.region;
  let subregion1 = i.subregion;
  let population1 = i.population;
  let demonym1 = i.demonym;
  let area1 = i.area;
  let timezones1 = i.timezones;
  let borders1 = i.borders;
  let nativeName1 = i.nativeName;
  let numericCode1 = i.numericCode;
  //let currencies1 = i.currencies.symbol;
  // let languages1 = i.languages.iso639_1;
  let translations1 = i.translations.de;
  let flag1 = i.flag;
  let cioc1 = i.cioc;