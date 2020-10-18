import * as React from 'react'
import * as ReactDOM from 'react-dom'
import CatchError from 'react-did-catch'

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<CatchError>Hi!</CatchError>,
		document.querySelector('#main'),
	)
})
