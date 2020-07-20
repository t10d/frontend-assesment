import React from 'react'
import { connect } from 'react-redux'
import { getRotationCard } from '../../actions/cardActions'
import './style.css'

function Deck({ getRotationCard }) {
  return (
    <div className="back" onClick={getRotationCard}>
      <div className="pattern" />
    </div>
  )
}

const mapDispatchToProps = { getRotationCard }

export default connect(null, mapDispatchToProps)(Deck)