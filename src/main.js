import {data} from './data/ghibli/ghibli.js'

import {dataMovieFilter, dataMovieFilterTwo, dataMovieFilterThree, dataScoreSort,movieSortAZ, movieSortZA,dataProducesFilter} from './data.js';

const allMovie = data.films;

// ***********************CARRUSEL O SLIDER DE FOTOS PRIMERA PAGINA********************
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function next() { // hacia la derecha
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}
function Prev() { //hacia la izquierda
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = slider[sliderSection.length - 1];
  slider.style.marginLeft = "0%";
  slider.style.transition = "all 0.5s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = "-100%";
    (Prev);
  }, 500);

}
btnRight.addEventListener("click", function () {
  next();
});
btnLeft.addEventListener('click', function () {
  Prev();
});


// *********************MOSTRAR Y ESCONDE PANTALLAS*************************
// *********************muestra la seccion de inicio************************
document.getElementById("logo").addEventListener("click", () => {
  document.getElementById("all-fist-images").style.display = "block";
  document.getElementById("all-fist-text").style.display = "block";
  document.getElementById("all-movies").style.display = "none";
  document.getElementById("all-score").style.display = "none";
  document.getElementById("all-producers").style.display = "none";
  document.getElementById("all-producers").style.display = "none";
  document.getElementById("movies").innerHTML = "";
  document.getElementById("section-producers").innerHTML = "";
});

// ******Muestra la seccion de movies y esconde las demas pantallas******
document.getElementById("menu-movies").addEventListener("click", () => {
  document.getElementById("all-fist-images").style.display = "none";
  document.getElementById("all-fist-text").style.display = "none";
  document.getElementById("all-score").style.display = "none";
  document.getElementById("all-producers").style.display = "none";
  document.getElementById("btn-az").style.display = "block";
  document.getElementById("btn-za").style.display = "block";
  document.getElementById("all-movies").style.display = "block";
  document.getElementById("movies").innerHTML = "";
  document.getElementById("all-score").innerHTML = "";
  document.getElementById("section-producers").innerHTML = "";

 showData(allMovie)
});

// *************muestra la seccion de los botones de 1985 a 1999**************
document.getElementById("first-filter").addEventListener("click", () => {
  document.getElementById("all-fist-images").style.display = "none";
  document.getElementById("all-fist-text").style.display = "none";
  document.getElementById("all-producers").style.display = "none";
  document.getElementById("all-score").style.display = "none";
  document.getElementById("btn-az").style.display = "none";
  document.getElementById("btn-za").style.display = "none";
  document.getElementById("all-producers").style.display = "none"
  document.getElementById("first-filter").style.display = "block";
  document.getElementById("movies").innerHTML = "";
  document.getElementById("section-producers").innerHTML = "";

  showData(dataMovieFilter(allMovie))
});

// *********** muestra la seccion de los botones de 2000 al 2010****************
document.getElementById("second-filter").addEventListener("click",() => {
  document.getElementById("all-fist-images").style.display = "none";
  document.getElementById("all-fist-text").style.display = "none";
  document.getElementById("all-producers").style.display = "none";
  document.getElementById("btn-az").style.display = "none";
  document.getElementById("btn-za").style.display = "none";
  document.getElementById("all-producers").style.display = "none"
  document.getElementById("second-filter").style.display = "block";
  document.getElementById("all-score").style.display = "none";
  document.getElementById("movies").innerHTML = "";
  document.getElementById("section-producers").innerHTML = "";

  showData(dataMovieFilterTwo(allMovie))
});

//****************muestra la seccion de los botones de 2011 hasta ahora *************
document.getElementById("three-filter").addEventListener("click",() => {
  document.getElementById("all-fist-images").style.display = "none";
  document.getElementById("all-fist-text").style.display = "none";
  document.getElementById("btn-az").style.display = "none";
  document.getElementById("btn-za").style.display = "none";
  document.getElementById("all-producers").style.display = "none"
  document.getElementById("three-filter").style.display = "block";
  document.getElementById("all-score").style.display = "none";
  document.getElementById("movies").innerHTML = "";
  document.getElementById("section-producers").innerHTML = "";

  showData(dataMovieFilterThree(allMovie))
});

//*********************muestra el orden de las peliculas de la A a la Z****************
document.getElementById("btn-az").addEventListener("click",() => {
  document.getElementById("movies").innerHTML = "";

 showData(movieSortAZ(allMovie))
});

//*********************muestra el orden de las peliculas de la  Z a la A****************
document.getElementById("btn-za").addEventListener("click",() => {
  document.getElementById("movies").innerHTML = "";

 showData(movieSortZA(allMovie))
});

//************muestra la seccion de los botones de animaciones*************************
document.getElementById("score").addEventListener("click",() => {
  document.getElementById("all-fist-images").style.display = "none";
  document.getElementById("all-fist-text").style.display = "none";
  document.getElementById("btn-az").style.display = "none";
  document.getElementById("btn-za").style.display = "none";
  document.getElementById("all-producers").style.display = "none"
  document.getElementById("all-score").style.display = "block";
  document.getElementById("score").style.display = "block";
  document.getElementById("movies").innerHTML = "";
  document.getElementById("section-producers").innerHTML = "";

 showScore(dataScoreSort(allMovie))
});

// **************muestra la seccion los botones de productores************************
document.getElementById("producers").addEventListener("click",() => {
  document.getElementById("all-fist-images").style.display = "none";
  document.getElementById("all-fist-text").style.display = "none";
  document.getElementById("btn-az").style.display = "none";
  document.getElementById("btn-za").style.display = "none";
  document.getElementById("all-producers").style.display = "block";
  document.getElementById("all-score").style.display = "none";
  document.getElementById("movies").innerHTML = "";
  document.getElementById("all-score").innerHTML = "";
});

// **********muestra la imagen y el filtrado del productor hayao miyazaki************
document.getElementById("hayao").addEventListener("click",() => {
  document.getElementById("img-isao").style.display = "none";
  document.getElementById("img-yoshio").style.display = "none";
  document.getElementById("img-toru").style.display = "none";
  document.getElementById("img-toshio").style.display = "none";
  document.getElementById("section-producers").innerHTML = "";

 showProducers(dataProducesFilter(allMovie,"Hayao Miyazaki"))
});

// **********muestra la imagen y el filtrado del productor isao takahata************
document.getElementById("isao").addEventListener("click",() => {
  document.getElementById("img-hayao").style.display = "none";
  document.getElementById("img-yoshio").style.display = "none";
  document.getElementById("img-toru").style.display = "none";
  document.getElementById("img-toshio").style.display = "none";
  document.getElementById("img-isao").style.display = "block";
  document.getElementById("section-producers").innerHTML = "";

 showProducers(dataProducesFilter(allMovie,"Isao Takahata"))
});

// **********muestra la imagen y el filtrado del productor yoshiaki nishimura************
document.getElementById("yoshio").addEventListener("click",() => {
  document.getElementById("img-hayao").style.display = "none";
  document.getElementById("img-yoshio").style.display = "block";
  document.getElementById("img-toru").style.display = "none";
  document.getElementById("img-toshio").style.display = "none";
  document.getElementById("img-isao").style.display = "none";
  document.getElementById("section-producers").innerHTML = "";

 showProducers(dataProducesFilter(allMovie,"Yoshiaki Nishimura"))
});

// **********muestra la imagen y el filtrado del productor toru hara************
document.getElementById("toru").addEventListener("click",() => {
  document.getElementById("img-hayao").style.display = "none";
  document.getElementById("img-yoshio").style.display = "none";
  document.getElementById("img-toru").style.display = "block";
  document.getElementById("img-toshio").style.display = "none";
  document.getElementById("img-isao").style.display = "none";
  document.getElementById("section-producers").innerHTML = "";

 showProducers(dataProducesFilter(allMovie,"Toru Hara"))
});

// **********muestra la imagen y el filtrado del productor Toshio suzuki************
document.getElementById("toshio").addEventListener("click",() => {
  document.getElementById("img-hayao").style.display = "none";
  document.getElementById("img-yoshio").style.display = "none";
  document.getElementById("img-toru").style.display = "none";
  document.getElementById("img-toshio").style.display = "block";
  document.getElementById("img-isao").style.display = "none";
  document.getElementById("section-producers").innerHTML = "";

 showProducers(dataProducesFilter(allMovie,"Toshio Suzuki"))
});


// **********************LLAMAR LA DATA DE POSTERS Y FECHAS************************
function showData(moviesToShow) {
  for (let i = 0; i < moviesToShow.length; i++) {
    const showPoster = document.createElement("img");
    const showDate = document.createElement("div");
    let showPosterAll = document.createElement("div");
    const showTitle = document.createElement("div");
    let showTitles = moviesToShow[i]["title"];
    let showDates = moviesToShow[i]["release_date"];
    showPoster.src = moviesToShow[i]["poster"];
    showPosterAll.id = moviesToShow[i].id;
    showTitle.id = "titles"
    showDate.id = "dates"
    showPoster.className = "all-movies-css"
    showDate.textContent = showDates;
    showTitle.textContent = showTitles;
    showPosterAll.appendChild(showPoster);
    showPosterAll.appendChild(showDate);
    showPosterAll.appendChild(showTitle);
    document.getElementById("movies").appendChild(showPosterAll)
}}

//*******LLAMAR A LAS PELICULAS POR RANKING CON SUS TITULOS DESCRIPCION Y POSTERS*********
function showScore(scoreToTitle) {
  for(let i =0; i< scoreToTitle.length; i++) {
    const descriptionRanking = document.createElement("section")
    const showScorePoster = document.createElement("img");
    const showScoreOne = document.createElement("section");
    const showScoreAll = document.createElement("div");
    const showScoreTitle = document.createElement("div");
    let showScoreTitleAll = scoreToTitle[i]["title"];
    showScoreOne.textContent= scoreToTitle[i]["rt_score"];
    showScorePoster.src = scoreToTitle[i]["poster"];
    descriptionRanking.textContent = scoreToTitle[i]["description"]
    showScoreOne.className = "all-score-css";
    descriptionRanking.className = "description";
    showScoreAll.className= "poster";
    showScoreTitle.className="title-css";
    showScoreTitle.textContent = showScoreTitleAll;
    showScoreAll.appendChild(showScoreTitle);
    showScoreAll.appendChild(showScoreOne);
    showScoreAll.appendChild(showScorePoster);
    showScoreAll.appendChild(descriptionRanking);
    document.getElementById("all-score").appendChild(showScoreAll);
  }}

  //********************LLAMAR A LOS PRODUCTORES Y NUEVOS POSTERS**********************
function showProducers(ShowToProducers) {
  for (let i = 0; i < ShowToProducers.length; i++) {
    const showPosterOne = document.createElement("img");
    const showPosterProducers = document.createElement("div");
    const showProducers = ShowToProducers[i]["producer"];
    showPosterOne.src = ShowToProducers[i]["poster"];
    showPosterProducers.className = "poster-css"
    showPosterProducers.innerHTML += showProducers;
    showPosterProducers.appendChild(showPosterOne);
    document.getElementById("section-producers").appendChild(showPosterProducers);
   }}


