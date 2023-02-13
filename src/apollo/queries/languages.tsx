import { gql } from '@apollo/client';

export const GET_LANGUAGES = gql`
  query getLanguages {
    languages {
      id
      name
      iso2
    }
  }
`;
