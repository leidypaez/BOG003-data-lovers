// filtra las fechas de 1985 a 1999 - 2000 2010 - 2010 hasta ahora
export const dataMovieFilter= (data) => {
  return data.filter(filterMovieOne => parseInt(filterMovieOne["release_date"])<=1999)
};

export const dataMovieFilterTwo = (data) => {
  return data.filter(filterMovieTwo => parseInt(filterMovieTwo["release_date"]) >= 2000  && parseInt(filterMovieTwo["release_date"]) <= 2010)
};

export const dataMovieFilterThree = (data) => {
  return data.filter(filterMovieThree => parseInt(filterMovieThree["release_date"]) >= 2011);
};

// ordena en la seccion de animaciones los porcentajes de mayor a menor
export function dataScoreSort(orderScore) {
  return orderScore.sort((a, b) => parseInt((a.rt_score) > parseInt(b.rt_score) ? 1 : -1));
}

// ordena las fechas de las peliculas de la A a la Z y de la Z a la A
export function movieSortAZ(orderAZ) {
  return orderAZ.sort((a, b) => (a.title > b.title ? 1 : -1));
}

export function movieSortZA(orderZA) {
  return orderZA.sort((a, b) => (a.title < b.title ? 1 : -1));
}

// filtra las peliculas por productores
export const dataProducesFilter = (arrayMovies,producer) => {
  const result = arrayMovies.filter(movie => {
    if (movie.producer == producer) {
      return true
    }
    else {
      return false
    }
  })
  return result
}
