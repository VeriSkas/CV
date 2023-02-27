import { gql } from '@apollo/client';

export const GET_LANGUAGES = gql`
  query getLanguages {
    languages {
      id
      name
      iso2
      native_name
    }
  }
`;

export const GET_LANGUAGES_AS_OPTIONS = gql`
  query getLanguages {
    languages {
      value: id
      label: name
    }
  }
`;

export const CREATE_LANGUAGE = gql`
  mutation createLanguage($language: LanguageInput!) {
    createLanguage(language: $language) {
      id
      name
      iso2
      native_name
    }
  }
`;

export const UPDATE_LANGUAGE = gql`
  mutation updateLanguage($id: ID!, $language: LanguageInput!) {
    updateLanguage(id: $id, language: $language) {
      id
      name
      iso2
      native_name
    }
  }
`;

export const DELETE_LANGUAGE = gql`
  mutation deleteLanguage($id: ID!) {
    deleteLanguage(id: $id) {
      affected
    }
  }
`;
