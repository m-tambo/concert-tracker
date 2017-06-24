import React from 'react'
import '../stylesheets/ui.scss'

export const concertCount = React.createClass({
  render() {
    return (
      <div className='concertCount'>
        <div className='total-concerts'>
          <span>5 concerts</span>
        </div>
        <div className='seen-before'>
          <span>2 bands</span>
        </div>
        <div className='would-see-again'>
          <span>3 bands</span>
        </div>
      </div>
    )
  }
})
