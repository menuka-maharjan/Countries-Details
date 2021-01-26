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