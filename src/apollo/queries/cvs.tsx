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

export const GET_CV = gql`
  query GetCV($id: ID!) {
    cv(id: $id) {
      id
      is_template
      name
      description
      user {
        id
        email
        profile {
          full_name
        }
        position {
          name
        }
      }
      skills {
        name: skill_name
      }
      languages {
        name: language_name
      }
    }
  }
`;
