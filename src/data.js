export const dataMovieFilter= (data) => {
  return data.filter(filterMovieOne => parseInt(filterMovieOne["release_date"])<=1999)
};

export const dataMovieFilterTwo = (data) => {
  return data.filter(filterMovieTwo => parseInt(filterMovieTwo["release_date"]) >= 2000  && parseInt(filterMovieTwo["release_date"]) <= 2010)
};

export const dataMovieFilterThree = (data) => {
  return data.filter(filterMovieThree => parseInt(filterMovieThree["release_date"]) >= 2011);
};

export function dataScoreSort(orderScore) {
  return orderScore.sort((a, b) => parseInt((a.rt_score) > parseInt(b.rt_score) ? 1 : -1));
}

export function movieSortAZ(orderAZ) {
  return orderAZ.sort((a, b) => (a.title > b.title ? 1 : -1));
}

export function movieSortZA(orderZA) {
  return orderZA.sort((a, b) => (a.title < b.title ? 1 : -1));
}

// export const dataProducerFilter = (producersFilter) => {
//   return producersFilter.filter((dataProducerFilter) => dataProducerFilter["producer"] === ["producer"]).map((film) => film["title"]);
// }
// console.log(dataProducerFilter(producersFilter))

export const dataProducesFilter = (arrayMovies,producer) => {
  const result = arrayMovies.map(movie => {
  if (movie.producer == producer) {
   // console.log(movie)
    //console.log(movie.producer)
    return movie.name
  }

  })
  return result
}
