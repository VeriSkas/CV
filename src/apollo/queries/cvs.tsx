import { gql } from '@apollo/client';

export const GET_CVS = gql`
  query GetCVs {
    cvs {
      is_template
      id
      name
      description
      user {
        email
      }
    }
  }
`;
