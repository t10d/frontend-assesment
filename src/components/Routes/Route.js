import React from 'react'
import PropTypes from 'prop-types'
import { Route as ReactDOMRoute } from 'react-router-dom'

const Route = ({ component: Component, ...rest }) => <ReactDOMRoute {...rest} render={() => <Component {...rest} />} />

Route.propTypes = {
  component: PropTypes.func
}

export default Route
