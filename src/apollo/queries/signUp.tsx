import { gql } from '@apollo/client';

export const SIGN_UP = gql`
  mutation signUp($auth: AuthInput!) {
    signup(auth: $auth) {
      user {
        email
        id
        role
      }
      token: access_token
    }
  }
`;
