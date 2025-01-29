// los angeles time update
function updateTime() {
  // LA
  let losAngeles = document.querySelector("#los-angeles");
  if (losAngeles) {
    let losAngelesDate = losAngeles.querySelector(".date");
    let losAngelesTime = losAngeles.querySelector(".time");
    let losAngelesCurrentTime = moment().tz("America/Los_Angeles");
    losAngelesDate.innerHTML = losAngelesCurrentTime.format("MMMM Do YYYY");
    losAngelesTime.innerHTML = losAngelesCurrentTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let sydney = document.querySelector("#sydney");
  if (sydney) {
    // Sydney

    let sydneyDate = sydney.querySelector(".date");
    let sydneyTime = sydney.querySelector(".time");
    let sydneyCurrentTime = moment().tz("Australia/Sydney");
    sydneyDate.innerHTML = sydneyCurrentTime.format("MMMM Do YYYY");
    sydneyTime.innerHTML = sydneyCurrentTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

// make dropdown work and replace the city when selected

function updateCity(event) {
  let timeZone = event.target.value;
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }

  let cityName = timeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(timeZone);
  let citiesElement = document.querySelector("#cities");
  // inject new element into the page
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small>
        </div>
     </div>
     <a href="index.html" class="back"> Go back </a>
  `;
}

let citiesSelect = document.querySelector("#city-select");
citiesSelect.addEventListener("change", updateCity);
