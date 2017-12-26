import React, { Component } from 'react'
import { render } from 'react-dom'

import 'css/style.css'

const App = props => (
  <div>Hello, world!</div>
)

export default App

render(<App />, document.getElementById('app'))
