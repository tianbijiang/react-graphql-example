export const GET_ALL_FILMS = `
query GET_ALL_FILMS {
  allFilms {
    films {
      id
      title
      releaseDate
      director
      openingCrawl
    }
  }
}
`;