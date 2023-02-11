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
        skill_name
        mastery
      }
      languages {
        language_name
        proficiency
      }
    }
  }
`;

export const CREATE_CV = gql`
  mutation CreateCV($cv: CvInput!) {
    createCv(cv: $cv) {
      id
    }
  }
`;
