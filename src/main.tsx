import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, useStore } from 'react-redux'
import App from './App'
import { setupStore } from './lib/store'

const store = setupStore()

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
