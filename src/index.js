import ReactDOM from 'react-dom/client'

import 'normalize.css'
import '@/assets/css/index.less'

import App from './App'
import { HashRouter } from 'react-router-dom'
import React, { Suspense } from 'react'

import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import store from './store'
import theme from '@/assets/theme'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // 这里配置suspense，是为了解决异步加载页面时使用loading文字进行提示，当然也可以使用组件
  <Suspense fallback="loading text">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
)
