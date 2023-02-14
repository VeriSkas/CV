import { gql } from '@apollo/client';

export const GET_DEPARTMENTS = gql`
  query getDepartments {
    departments {
      id
      name
    }
  }
`;

export const GET_DEPARTMENTS_AS_OPTIONS = gql`
  query getDepartments {
    departments {
      id
      value: name
    }
  }
`;
