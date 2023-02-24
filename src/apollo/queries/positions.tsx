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

export const UPDATE_POSITION = gql`
  mutation updatePosition($id: ID!, $position: PositionInput!) {
    updatePosition(id: $id, position: $position) {
      id
      name
    }
  }
`;

export const CREATE_POSITION = gql`
  mutation createPosition($position: PositionInput!) {
    createPosition(position: $position) {
      id
      name
    }
  }
`;

export const DELETE_POSITION = gql`
  mutation deletePosition($id: ID!) {
    deletePosition(id: $id) {
      affected
    }
  }
`;
