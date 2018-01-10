import React from 'react'
import { render } from 'react-dom' 
import './style.css'

var container = document.body.appendChild(
  document.createElement('div')
)

var element = React.createElement(
  'h1',
  null,
  'Hello, world!'
);

render(element, container)

