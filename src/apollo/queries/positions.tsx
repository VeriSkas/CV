import { gql } from '@apollo/client';

export const GET_POSITIONS = gql`
  query getPositions {
    positions {
      id
      name
    }
  }
`;

export const GET_POSITIONS_AS_OPTIONS = gql`
  query getPositions {
    positions {
      value: id
      label: name
    }
  }
`;
