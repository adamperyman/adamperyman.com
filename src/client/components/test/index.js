import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'

import { getGraphQlResponse } from './actions'

export class Test extends React.Component {
  static propTypes = {
    response: PropTypes.string,
    getGraphQlResponse: PropTypes.func.isRequired
  }

  render () {
    return (
      <div>
        <div>Test Page</div>

        <div style={{ margin: '1em', display: 'block' }}>
          <strong>Foo: {this.props.response}</strong>
        </div>

        <div style={{ margin: '1em', display: 'block' }}>
          <RaisedButton label='Click Me' onClick={this.getResponse} />
        </div>

        CLick <Link to='/'>Here</Link> to go home
      </div>
    )
  }

  getResponse = () => {
    this.props.getGraphQlResponse()
  }
}

const mapStateToProps = state => ({
  response: state.test.response
})

const mapDispatchToProps = dispatch => ({
  getGraphQlResponse: () => dispatch(getGraphQlResponse())
})

export default connect(mapStateToProps, mapDispatchToProps)(Test)
