const searchInputBox = document.querySelector(".searchBox");

const searchBtn = document.querySelector(".searchBtn");
searchBtn.addEventListener('click', clickHandler);

const movieTable = document.querySelector("#movie-table");
const tblHeading = document.querySelector("#title");
const tbldata1 = document.querySelector("#poster img");
const tbldata2 = document.querySelector("#year h3");
const tbldata3 = document.querySelector("#actors h4");

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

  // movie table //
  movieTable.classList.add('movie-data');

  // movie title //
  tblHeading.classList.add('movie-heading');
  tblHeading.innerText = `Title: ${movieTitle}`;

  // movie poster //
  tbldata1.classList.add('movie-img');
  tbldata1.setAttribute('src', `${movieImage}`);

  // movie year //
  tbldata2.classList.add('movie-year');
  tbldata2.innerText = `Year: ${movieYear}`;

  // movie actors //

  tbldata3.classList.add('movie-actors');
  tbldata3.innerText = `Actors: ${movieActor}`;

}