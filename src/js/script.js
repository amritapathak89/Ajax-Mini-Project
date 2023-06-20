const searchInputBox = document.querySelector(".searchBox");

const searchBtn = document.querySelector(".searchBtn");
searchBtn.addEventListener('click', clickHandler);

const tblHeading = document.querySelector("#title");
const tbldata1 = document.querySelector("#poster");
const tbldata2 = document.querySelector("#year");
const tbldata3 = document.querySelector("#actors");

async function clickHandler(){
  const inputBoxValue = searchInputBox.value;
  console.log("user input", inputBoxValue);

  const response = await fetch(`https://search.imdbot.workers.dev/?q=${inputBoxValue}`)
  const jsonResponse = await response.json();

  // accessing objects //
  const movieTitle = jsonResponse.description[0]["#TITLE"];
  const movieYear = jsonResponse.description[0]["#YEAR"];
  const movieActor = jsonResponse.description[0]["#ACTORS"];
  const movieImage = jsonResponse.description[0]["#IMG_POSTER"];

  // movie title //
  const td_title = document.createElement('h1');
  td_title.classList.add('movie-heading');
  td_title.innerText = `Title :${movieTitle}`;
  tblHeading.appendChild(td_title);

  // movie poster //
  const td_poster = document.createElement('img');
  td_poster.classList.add('movie-img');
  td_poster.setAttribute('src', `${movieImage}`);
  tbldata1.appendChild(td_poster);

  // movie year //
  const td_year = document.createElement('h4');
  td_year.classList.add('movie-year');
  td_year.innerText = `Year :${movieYear}`;
  tbldata2.appendChild(td_year);

  // movie actors //

  const td_actors = document.createElement('h3');
  td_actors.classList.add('movie-actors');
  td_actors.innerText = `Actors :${movieActor}`;
  tbldata3.appendChild(td_actors);








}