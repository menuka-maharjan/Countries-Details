let countries = " ";
const Form = document.querySelector("form");
Form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    countries = document.querySelector("input").value.trim();
    fetchResult(countries);
  });