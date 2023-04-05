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

export const GET_PROJECTS_OPTIONS = gql`
  query Projects {
    projects {
      value: id
      label: name
    }
  }
`;

export const GET_PROJECT = gql`
  query Project($id: ID!) {
    project(id: $id) {
      id
      name
      internal_name
      domain
      description
      start_date
      end_date
      team_size
      tech_stack {
        id
        name
      }
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation updateProject($id: ID!, $project: ProjectInput!) {
    updateProject(id: $id, project: $project) {
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
      name
      internal_name
      domain
      start_date
      end_date
      team_size
    }
  }
`;
