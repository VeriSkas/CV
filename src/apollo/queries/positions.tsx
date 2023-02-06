import { gql } from '@apollo/client';

export const GET_POSITIONS = gql`
  query getPositions {
    positions {
      id
      name
    }
  }
`;
