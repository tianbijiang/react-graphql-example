export const GET_FILM_BY_ID = `
query GET_FILM_BY_ID($id: ID) {
  film(id: $id) {
    id
    title
    releaseDate
    director
    openingCrawl
    characterConnection {
      characters {
        id
        name
      }
    }
  }
}
`;