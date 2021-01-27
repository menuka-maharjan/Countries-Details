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
  
  SHOW.innerHTML = `
  <div class="container111">
  
  <div id="flag">
    <img id="im" src="${flag1}" alt="#" />
  </div>
  <br />
  <br />

  <div id="name">
    <h1>NAME : ${name1}</h1>
  </div>
  <br />

  <div id="capital">
    <h1>CAPITAL : ${capital1}</h1>
  </div>
  <br />

  <div id="region">
    <h1>REGION : ${region1}</h1>
  </div>
  <br />

  <div id="sub-region">
    <h1>SUB-REGION: ${subregion1}</h1>
  </div>
  <br />

  <div id="callingCodes">
    <h1>callingCodes : ${callingCodes1}</h1>
  </div>
  <br />

  <div id="population">
    <h1>POPULATION : ${population1}</h1>
  </div>
  <br />

  <div id="demonym111">
    <h1>DEMONYM: ${demonym1}</h1>
  </div>
  <br />

  <div id="area">
    <h1>AREA : ${area1}</h1>
  </div>
  <br />

  <div id="timezones">
    <h1>TIME-ZONE: ${timezones1}</h1>
  </div>
  <br />

  <div id="borders">
    <h1>BORDER: ${borders1}</h1>
  </div>
  <br />

  <div id="nativeName">
    <h1>NATIVE-NAME : ${nativeName1}</h1>
  </div>
  <br />

  <div id="numericCode">
    <h1>NUMERIC-CODE : ${numericCode1}</h1>
  </div>
  <br />

  <div id="translate">
    <h1>TRANSLATIONS : ${translations1}</h1>
  </div>
  <br />

  <div id="cioc">
    <h1>CIOC : ${cioc1}</h1>
  </div>
  <br />
 </div> 
</div>

</div>`;
};