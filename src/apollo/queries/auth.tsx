import { gql } from '@apollo/client';

export const AUTH = gql`
  query auth($auth: AuthInput!) {
    login(auth: $auth) {
      user {
        email
      }
      token: access_token
    }
  }
`;
