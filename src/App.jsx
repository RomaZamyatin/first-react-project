import { createElement, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {

  const [count, setCount] = useState(0)
  let date = new Date();
  return (
	createElement(React.Fragment,null,
		createElement('div',null,
			createElement('a', {href: 'https://vite.dev',target:'_blank'},
				createElement('img',{src:viteLogo,className:'logo',alt:'Vite Logo'})
			),
			createElement('a', {href: 'https://react.dev',target:'_blank'},
				createElement('img',{src:reactLogo,className:'logo react',alt:'React Logo'})
			)
		),
		createElement('h1',null,'Vite + React'),
		createElement('div',{className:'card'},
			createElement('button',{onClick:()=>setCount(count+1)},`count is ${count}`),
			createElement('p',null,`edit `,createElement('code',null,'src/App.jsx'), ` and save to test HMR`),
		),
		createElement('p',{className:"read-the-docs"},'Click on the Vite and React logos to learn more'),
		createElement('p',null,`${date.getFullYear()}`)
	)
  )
}
export default App
