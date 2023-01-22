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
