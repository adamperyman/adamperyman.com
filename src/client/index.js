import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { AppContainer } from 'react-hot-loader'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import store from './redux/store'
import Router from './router'
import muiTheme from './muiTheme'

import 'sanitize.css/sanitize.css'

import './css/index.scss'

if (!window.Intl) {
  window.Intl = import('intl')
}

const render = AppRouter => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <IntlProvider locale='en'>
          <MuiThemeProvider muiTheme={muiTheme}>
            <AppRouter />
          </MuiThemeProvider>
        </IntlProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}

render(Router)

if (module.hot) {
  module.hot.accept('./router.js', () => render(require('./router').default))
}
