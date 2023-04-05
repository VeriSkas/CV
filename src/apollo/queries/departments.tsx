import { gql } from '@apollo/client';

export const GET_DEPARTMENTS = gql`
  query getDepartments {
    departments {
      id
      name
    }
  }
`;

export const GET_DEPARTMENTS_AS_OPTIONS = gql`
  query getDepartments {
    departments {
      value: id
      label: name
    }
  }
`;

export const CREATE_DEPARTMENT = gql`
  mutation createDepartment($department: DepartmentInput!) {
    createDepartment(department: $department) {
      id
      name
    }
  }
`;

export const UPDATE_DEPARTMENT = gql`
  mutation updateDepartment($id: ID!, $department: DepartmentInput!) {
    updateDepartment(id: $id, department: $department) {
      id
      name
    }
  }
`;

export const DELETE_DEPARTMENT = gql`
  mutation deleteDepartment($id: ID!) {
    deleteDepartment(id: $id) {
      affected
    }
  }
`;
