import { createHttpLink } from '@apollo/client';
import { ApolloClient, from, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

import { SupportedLanguages } from '../constants/constants';
import { BAErrorMessages } from '../constants/text';
import { LSItems } from '../constants/variables';
import { USER_TOKEN } from './state';

const URI = 'https://cv-project-js.inno.ws/api/graphql';

const httpLink = createHttpLink({
  uri: URI,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: USER_TOKEN() ? `Bearer ${USER_TOKEN()}` : '',
    },
  };
});

const errorLink = onError(({ graphQLErrors }) => {
  const language =
    localStorage.getItem(LSItems.pageLanguage) ?? SupportedLanguages.en;

  graphQLErrors?.forEach(({ message }) => {
    if (message === BAErrorMessages.unauthorized) {
      localStorage.clear();
      localStorage.setItem(LSItems.pageLanguage, language);
      USER_TOKEN('');
    }
  });
});

export const client = new ApolloClient({
  link: from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
});
