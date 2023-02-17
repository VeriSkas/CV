import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
  query Projects {
    projects {
      id
      name
      internal_name
      domain
      start_date
      end_date
      team_size
    }
  }
`;

export const CREATE_PROJECT = gql`
  mutation CreateProject($project: ProjectInput!) {
    createProject(project: $project) {
      id
    }
  }
`;
