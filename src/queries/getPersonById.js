export const GET_PERSON_BY_ID = `
query GET_PERSON_BY_ID($id: ID) {
  person(id: $id) {
    id
    name
    birthYear
    gender
    homeworld {
      id
      name
    }
    filmConnection {
      films {
        id
        title
      }
    }
  }
}
`;