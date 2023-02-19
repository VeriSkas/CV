import { gql } from '@apollo/client';

export const GET_SKILLS = gql`
  query getSkills {
    skills {
      id
      name
    }
  }
`;

export const GET_SKILLS_AS_OPTIONS = gql`
  query getSkills {
    skills {
      value: id
      label: name
    }
  }
`;
