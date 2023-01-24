import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query getUsers {
    users {
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
        skills {
          skill_name
          mastery
        }
        languages {
          language_name
          proficiency
        }
      }
      cvs {
        id
      }
      department {
        name
        id
      }
      position {
        name
        id
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $user: UpdateUserInput!) {
    updateUser(id: $id, user: $user) {
      id
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
