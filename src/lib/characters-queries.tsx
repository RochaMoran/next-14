import { gql } from "@apollo/client";

export const getAll = gql`
  query {
    characters(page: 1) {
      results {
        name
        image
      }
    }
  }
`;