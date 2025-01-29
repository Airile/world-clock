// los angeles time update
function updateTime() {
  // LA
  let losAngeles = document.querySelector("#los-angeles");
  let losAngelesDate = losAngeles.querySelector(".date");
  let losAngelesTime = losAngeles.querySelector(".time");
  let losAngelesCurrentTime = moment().tz("America/Los_Angeles");

  losAngelesDate.innerHTML = losAngelesCurrentTime.format("MMMM Do YYYY");
  losAngelesTime.innerHTML = losAngelesCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  // Sydney
  let sydney = document.querySelector("#sydney");
  let sydneyDate = sydney.querySelector(".date");
  let sydneyTime = sydney.querySelector(".time");
  let sydneyCurrentTime = moment().tz("Australia/Sydney");
  sydneyDate.innerHTML = sydneyCurrentTime.format("MMMM Do YYYY");
  sydneyTime.innerHTML = sydneyCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
