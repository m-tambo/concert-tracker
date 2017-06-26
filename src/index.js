import React from 'react'
import { render } from 'react-dom'
import { concertCount } from './components/concertCount'

window.React = React

render(
	<concertCount total={25}
                seen={6}
                seeAgain={14}
                yetToSee={3} />,
	document.getElementById('react-container')
)
