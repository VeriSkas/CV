import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query getUsers {
    users {
      id
      email
      profile {
        firstName: first_name
        lastName: last_name
        fullName: full_name
        avatar
      }
      department: department_name
      position: position_name
    }
  }
`;

export const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      email
      profile {
        first_name
        last_name
        full_name
        avatar
      }
      department_name
      position_name
    }
  }
`;

export const DELETE_USER = gql`
  mutation Users($id: ID!) {
    deleteUser(id: $id) {
      affected
    }
  }
`;
