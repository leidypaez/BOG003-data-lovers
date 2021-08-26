import { dataMovieFilter,dataMovieFilterTwo,dataMovieFilterThree,dataScoreSort, movieSortAZ, movieSortZA,dataProducesFilter} from '../src/data.js';
const dataMovieFilterYear = [
  {"title": "Castle in the Sky","release_date": "1986"},
  {"title": "Pom Poko","release_date": "1994"},
  {"title": "Spirited Away","release_date": "2001"},
  {"title": "Howl's Moving Castle","release_date": "2004"},

  {"title": "The Wind Rises","release_date": "2013"},

  {"title": "When Marnie Was There","release_date": "2014"},
];

//Hace el test de el filtro por peliculas de 1985 a 1999
describe('dataMovieFilter', () => {
  it('is a function', () => {
    expect(typeof dataMovieFilter).toBe('function');
  })
 const filterYear = [
  {"title": "Castle in the Sky","release_date": "1986"},
  {"title": "Pom Poko","release_date": "1994"},
];

it('dataMovieFilter should return those with a relase_date over to 1999', () => {
   expect(dataMovieFilter(dataMovieFilterYear)).toStrictEqual(expect.objectContaining(filterYear))
  })
});

//Hace el test de filtrar por fechas de 2000 a 2010
describe('dataMovieFilterTwo', () => {
  it('is a function',() => {
    expect(typeof dataMovieFilterTwo).toBe('function');
  })
 const filterYearTwo = [
  {"title": "Spirited Away","release_date": "2001"},
  {"title": "Howl's Moving Castle","release_date": "2004"},
];
it('dataMovieFilterTwo should return those with a relase_date before 2010 after 2000', () => {
   expect(dataMovieFilterTwo(dataMovieFilterYear)).toStrictEqual(expect.objectContaining(filterYearTwo))
})
});

describe('dataMovieFilterThree', () => {
  it('is a function', () => {
    expect(typeof dataMovieFilterThree).toBe('function');
  })
  const filterYearThree = [
    {"title": "The Wind Rises","release_date": "2013"},
    {"title": "When Marnie Was There","release_date": "2014"},
  ]
 it('dataMovieFilterThree should return those with a relase_date before 2011 until now', () => {
   expect(dataMovieFilterThree(dataMovieFilterYear)).toStrictEqual(expect.objectContaining(filterYearThree))
 })
});

//Hace el test de filtrar por fechas de 2010 hasta ahora
describe('dataScoreSort', () => {
  it('is a function', () => {
    expect(typeof dataScoreSort).toBe('function');
  })
  const filterScoreOne = [
    {"rt_score": "95"},
    {"rt_score": "78"},
    {"rt_score": "87"},

    it('dataScoreSort should return those with a rt_score from lowest to highest', () => {
      expect(dataScoreSort(filterScoreOne)).toStrictEqual(expect.objectContaining(filterScoreTwo))
    })
];
const filterScoreTwo = [
  {"rt_score": "78"},
  {"rt_score": "87"},
  {"rt_score": "95"},
];
});

//Hace el test de ordenar de la (A)a la (Z)
describe('movieSortAZ',() => {
  it('is a function', () => {
    expect(typeof movieSortAZ).toBe('function');
  })
  const filterAz = [
    {"title": "Castle in the Sky"},
    {"title": "Howl's Moving Castle"},
    {"title": "Pom Poko"},
  ]
  it('movieSortAZ should return those with a title in order from a to z', () => {
    expect(movieSortAZ(filterByAz)).toEqual(expect.objectContaining(filterAz))
  })
  const filterByAz = [
    {"title": "Pom Poko"},
    {"title": "Castle in the Sky"},
    {"title": "Howl's Moving Castle"},
  ]
});

// Hace el test de ordenar de la (Z) a la (A)
describe('movieSortZA', () => {
  it('is a function', () => {
    expect(typeof movieSortZA).toBe('function');
  })
  const filterZa = [
    {"title": "The Wind Rises"},
    {"title": "Castle in the Sky"},
    {"title": "When Marnie Was There"},
  ]
  it('movieSortZA should return those with a title in order from z to a', () => {
    expect(movieSortZA(filterZa)).toEqual(expect.objectContaining([
       {"title": "When Marnie Was There"},
       {"title": "The Wind Rises"},
       {"title": "Castle in the Sky"},
      ]
    ))
  })
});

//Hace el test de filtrar por productores
describe('dataProducesFilter', () => {
  it('is a function', () => {
    expect(typeof dataProducesFilter).toBe('function');
  })
 const filterProducer = [
  {"producer": "Isao Takahata"},
  {"producer": "Toshio Suzuki"},
];

it('dataProducesFilter should return those with a producer', () => {
   expect(dataProducesFilter(filterProducer,"Toshio Suzuki")).toEqual(expect.objectContaining( [
    {"producer": "Toshio Suzuki"}
  ]))
  })
});
