import React from 'react'
import ReactDOM from 'react-dom'
import HeroSpot from './components/HeroSpot/HeroSpot'
import Video from './components/Video/Video'
import Tutorial from './components/Tutorial/Tutorial'
import NextSteps from './components/NextSteps/NextSteps'
import Footer from './components/Footer/Footer'

const App = () => (
  <div>
    <HeroSpot />
    <Video />
    <Tutorial />
    <NextSteps />
    <Footer />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
