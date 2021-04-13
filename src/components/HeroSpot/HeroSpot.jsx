/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
import React from 'react'
import './styles/HeroSpot.css'
import logoPath from './images/logo.png'
import bootstrapPathImg from './images/bootstrap.png'
import yeomanPathImg from './images/yeoman.png'
import facebookPathImg from './images/facebookdesign.png'

function Slideshow() {
  const [time, setTime] = React.useState(Date.now())
  const [index, setIndex] = React.useState(1)
  console.log(time)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now())
      setIndex((index) => (index === 3 ? 1 : index + 1))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  if (index === 1) {
    return (
      <div className="slideshow">
        <img src={bootstrapPathImg} alt="Bootstrap" className="slide active" />
        <img src={yeomanPathImg} alt="Yeoman" className="slide" />
        <img src={facebookPathImg} alt="Facebook" className="slide" />
      </div>
    )
  }
  if (index === 2) {
    return (
      <div className="slideshow">
        <img src={bootstrapPathImg} alt="Bootstrap" className="slide" />
        <img src={yeomanPathImg} alt="Yeoman" className="slide active" />
        <img src={facebookPathImg} alt="Facebook" className="slide" />
      </div>
    )
  }
  if (index === 3) {
    return (
      <div className="slideshow">
        <img src={bootstrapPathImg} alt="Bootstrap" className="slide" />
        <img src={yeomanPathImg} alt="Yeoman" className="slide " />
        <img src={facebookPathImg} alt="Facebook" className="slide active" />
      </div>
    )
  }
}

const HeroSpot = () => (
  <section id="main-container" className="main-container">
    <a className="help-link" href="https://help.github.com/pages/">Pages Help</a>
    <a href="/" className="logo-container">
      <img className="logoImg" src={logoPath} alt="Github Pages" />
    </a>
    <h1 className="hero-spot-title">Websites for you and your projects.</h1>
    <h2 className="hero-spot-subtitle">Hosted directly from your <a href="https://github.com">Github repository</a>. Just edit, push, and your changes are live.</h2>
    <Slideshow />
  </section>
)

export default HeroSpot

// <img src={foundationPathImg} alt="Bootstrap" className="slide"   />
// <img src={ghPathImg} alt="Bootstrap" className="slide"   />
// <img src={adobePathImg} alt="Bootstrap" className="slide"   />
// <img src={jekyllPathImg} alt="Bootstrap" className="slide"   />
// <img src={electronPathImg} alt="Bootstrap" className="slide"   />
// <img src={semanticuiPathImg} alt="Bootstrap" className="slide"   />
// <img src={microsoftPathImg} alt="Bootstrap" className="slide"   />
