import React, { Component } from 'react'
import '../stylesheets/ui.scss'

export const concertCount = React.createClass({
// class concertCount extends Component {
  render() {
    return (
      <div className='concert-count'>
        <div className='total-concerts'>
          <span>{this.props.total}</span>
          <span>concerts</span>
        </div>
        <div className='seen-before'>
          <span>{this.props.seen}</span>
          <span>bands</span>
        </div>
        <div className='would-see-again'>
          <span>{this.props.seeAgain}</span>
          <span>bands</span>
        </div>
        <div className='yet-to-see'>
          <span>{this.props.yetToSee}</span>
          <span>concerts</span>
        </div>
      </div>
    )
  }
// }
})

// export default concertCount
