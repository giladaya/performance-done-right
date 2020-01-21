import React from 'react'
import './styles.scss'
import logo from '../assets/logo.png'
import img3 from '../assets/hackernews.png'

const App = () => (
  <div className="app">
    <h2>minimal react boiler</h2>
    <img src={logo} alt="react boiler" />
    <img src={img3} alt="react boiler" />
    <a
      href="https://github.com/sumitjoshi97/react-boiler"
      rel="noreferrer noopener"
      target="_blank"
    >
      know more
    </a>
    <footer>developed and maintained by @Sj</footer>
  </div>
)

export default App
