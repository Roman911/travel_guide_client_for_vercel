import React from 'react'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import moment from 'moment'
import 'moment/locale/uk'
import { useApollo } from '../lib/apolloClient'
import '../styles/globals.css'
import store from '../store/store'
import { Theme } from '../Components'

moment.locale('uk')

export default function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Theme>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <Component {...pageProps} />
          </SnackbarProvider>
        </Theme>
      </Provider>
    </ApolloProvider>
  )
}
