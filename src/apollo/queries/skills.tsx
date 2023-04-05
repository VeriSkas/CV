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

export const CREATE_SKILL = gql`
  mutation createSkill($skill: SkillInput!) {
    createSkill(skill: $skill) {
      id
      name
    }
  }
`;

export const UPDATE_SKILL = gql`
  mutation updateSkill($id: ID!, $skill: SkillInput!) {
    updateSkill(id: $id, skill: $skill) {
      id
      name
    }
  }
`;

export const DELETE_SKILL = gql`
  mutation deleteSkill($id: ID!) {
    deleteSkill(id: $id) {
      affected
    }
  }
`;
