import { gql } from '@apollo/client';

export const AUTH = gql`
  query auth($auth: AuthInput!) {
    login(auth: $auth) {
      user {
        email
        id
        role
      }
      token: access_token
    }
  }
`;
