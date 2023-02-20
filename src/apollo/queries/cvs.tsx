import { gql } from '@apollo/client';

export const GET_CVS = gql`
  query GetCVs {
    cvs {
      is_template
      id
      name
      description
      user {
        id
        email
      }
      projects {
        id
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

export const DELETE_CV = gql`
  mutation DeleteCv($id: ID!) {
    deleteCv(id: $id) {
      affected
    }
  }
`;

export const UPDATE_CV = gql`
  mutation UpdateCv($id: ID!, $cv: CvInput!) {
    updateCv(id: $id, cv: $cv) {
      is_template
      id
      name
      description
      user {
        id
        email
      }
      projects {
        id
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
