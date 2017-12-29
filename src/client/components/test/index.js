import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'

import { runTest } from './actions'

export class Test extends React.Component {
  static propTypes = {
    foo: PropTypes.string,
    runTest: PropTypes.func.isRequired
  }

  render () {
    return (
      <div>
        <div>Test Page</div>

        <div style={{ margin: '1em', display: 'block' }}>
          <strong>Foo: {this.props.foo}</strong>
        </div>

        <div style={{ margin: '1em', display: 'block' }}>
          <RaisedButton label='Click Me' onClick={this.handleRunTest} />
        </div>

        CLick <Link to='/'>Here</Link> to go home
      </div>
    )
  }

  handleRunTest = () => {
    this.props.runTest()
  }
}

const mapStateToProps = state => ({
  foo: state.test.get('foo')
})

const mapDispatchToProps = dispatch => ({
  runTest: () => dispatch(runTest())
})

export default connect(mapStateToProps, mapDispatchToProps)(Test)
