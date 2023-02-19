import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query getUsers {
    users {
      id
      email
      profile {
        first_name
        last_name
        full_name
        avatar
      }
      department_name
      position_name
    }
  }
`;

export const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      email
      profile {
        id
        first_name
        last_name
        full_name
        avatar
        skills {
          skill_name
          mastery
        }
        languages {
          language_name
          proficiency
        }
      }
      cvs {
        id
      }
      department {
        name
        id
      }
      position {
        name
        id
      }
    }
  }
`;

export const GET_USER_LOGO_INFO = gql`
  query getUserLogoInfo($id: ID!) {
    user(id: $id) {
      email
      profile {
        first_name
        last_name
        avatar
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($user: CreateUserInput!) {
    createUser(user: $user) {
      id
      email
      profile {
        full_name
        last_name
        full_name
        avatar
      }
      department_name
      position_name
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $user: UpdateUserInput!) {
    updateUser(id: $id, user: $user) {
      id
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      affected
    }
  }
`;

export const UPLOAD_AVATAR = gql`
  mutation UploadAvatar($id: ID!, $avatar: AvatarInput!) {
    uploadAvatar(id: $id, avatar: $avatar)
  }
`;

export const DELETE_AVATAR = gql`
  mutation DeleteAvatar($id: ID!) {
    deleteAvatar(id: $id)
  }
`;
