const callToApi = () => {
  return fetch(
    'https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((item) => {
        return {
          poster: item.poster,
          movie: item.movie,
          quote: item.full_line,
          year: item.year,
          director: item.director,
          audio: item.audio,
        };
      });
      return cleanData;
    });
};

export default callToApi;
