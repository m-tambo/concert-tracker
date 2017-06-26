import { Component } from 'react'
import '../stylesheets/ui.scss'

// _______ES6 CLASS BASED VERSION_______
// class concertCount extends Component {
//   render() {
//     return (
//     )
//   }
// }

// _______STATELESS COMPONENT VERSION_______
export const concertCount = ({total, seen, seeAgain, yetToSee}) => (
      <div className='concert-count'>
        <div className='total-concerts'>
          <span>{total}</span>
          <span>concerts</span>
        </div>
        <div className='seen-before'>
          <span>{seen}</span>
          <span>bands</span>
        </div>
        <div className='would-see-again'>
          <span>{seeAgain}</span>
          <span>bands</span>
        </div>
        <div className='yet-to-see'>
          <span>{yetToSee}</span>
          <span>concerts</span>
        </div>
      </div>
)

// export default concertCount
