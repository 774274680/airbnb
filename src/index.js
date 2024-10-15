import ReactDOM from 'react-dom/client'

import 'normalize.css'
import '@/assets/css/index.less'

import App from './App'
import { HashRouter } from 'react-router-dom'
import React, { Suspense } from 'react'

import { Provider } from 'react-redux'
import store from './store'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // 这里配置suspense，是为了解决异步加载页面时使用loading文字进行提示，当然也可以使用组件
  <Suspense fallback="loading text">
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </Suspense>
)
