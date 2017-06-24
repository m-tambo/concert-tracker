import React from 'react'
import { render } from 'react-dom'
import { concertCount } from './components/concertCount.js'

window.React = React

render(
	<concertCount />,
	document.getElementById('react-container')
)
