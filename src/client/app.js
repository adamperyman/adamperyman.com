import React from 'react'
import { render } from 'react-dom'

import './css/style.scss'

const App = () => <div>Hello, world!</div>

export default App

render(<App />, document.getElementById('app'))
