/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-console */
/* eslint-disable max-len */
import React from 'react'
import Octicon from 'react-octicon'
import './styles/Tutorial.css'
import createRepoImgPath from './images/bg-1.png'

function Tutorial() {
  const [botonState, setBotonState] = React.useState(1)
  const [btn1Clase, setBtn1Clase] = React.useState('selected btnPadre1')
  const [btn2Clase, setBtn2Clase] = React.useState('btnPadre2')

  const eventoBtnPadre = (e) => {
    const btnClickeado = e.target.className
    if (btnClickeado === 'selected btnPadre1' || btnClickeado === 'btnPadre1') {
      console.log('btn1clickeado')
      setBtn1Clase('selected btnPadre1')
      setBtn2Clase('btnPadre2')
      setBotonState(1)
    }
    if (btnClickeado === 'selected btnPadre2' || btnClickeado === 'btnPadre2') {
      console.log('btn2clickeado')
      setBtn1Clase('btnPadre1')
      setBtn2Clase('selected btnPadre2')
      setBotonState(2)
    }
    return ''
  }

  if (botonState === 1) {
    return (
      <section className="tutorial-container">
        <h1 className="tutorial-title">Ready to get started? Build your own site from scratch or generate one for your project.</h1>
        <h2 className="tutorial-subtitle">You get one site per GitHub account and organization, and unlimited project sites. Let‘s get started.</h2>

        <div className="btn-container">
          <button type="button" className={btn1Clase} onClick={eventoBtnPadre}>User or organization site</button>
          <button type="button" className={btn2Clase} onClick={eventoBtnPadre}>Project site</button>
        </div>
        <ul className="tutorial-steps">
          <li id="create-repo-step" className="create-repo-step">
            <div className="create-repo-step-text">
              <p className="p-title">Create a repository</p>
              <p>Head over to <a href="github.com">GitHub</a> and <a href="github.com/new">create a new public repository</a> named <em>username</em>.github.io, where <em>username</em> is your username (or organization name) on GitHub.</p>

              <p className="p-details">If the first part of the repository doesn’t exactly match your username, it won’t work, so make sure to get it right.</p>
            </div>
            <div className="create-repo-step-image-container">
              <img className="create-repo-step-img" src={createRepoImgPath} alt="Create Repo Step" />
            </div>
          </li>

          <li className="question-step">
            <p className="p-title">What git client are you using?</p>
            <div className="btn-container">
              <button type="button" className="selected">A terminal</button>
              <button type="button">GitHub Desktop</button>
              <button type="button">I don't know</button>
            </div>
          </li>

          <li className="cmd-step">
            <p className="p-title">Clone the repository</p>
            <p>Go to the folder where you want to store your project, and clone the new repository:</p>
            <div className="bash">
              <div className="header" />
              <div className="shell">
                <p><span className="symbol1">~</span><span className="symbol2">$</span>git clone https://github.com/<em>username</em>/<em>username</em>.github.io</p>
              </div>
            </div>
          </li>

          <li className="cmd-step">
            <p className="p-title">Hello World</p>
            <p>Enter the project folder and add an index.html file:</p>

            <div className="bash">
              <div className="header" />
              <div className="shell">
                <p><span className="symbol1">~</span><span className="symbol2">$</span>cd <em>username</em>.github.io</p>
                <p><span className="symbol1">~</span><span className="symbol2">$</span>echo "Hello World" {'>'} index.html</p>
              </div>
            </div>
          </li>

          <li className="cmd-step">
            <p className="p-title">Push it</p>
            <p>Add, commit, and push your changes:</p>

            <div className="bash">
              <div className="header" />
              <div className="shell">
                <p><span className="symbol1">~</span><span className="symbol2">$</span>git add --all</p>
                <p><span className="symbol1">~</span><span className="symbol2">$</span>git commit -m "Initial commit"</p>
                <p><span className="symbol1">~</span><span className="symbol2">$</span>git push -u origin main</p>
              </div>
            </div>
          </li>

          <li className="done-step">
            <p className="p-title">…and you're done!</p>
            <p>Fire up a browser and go to <strong>https://<em>username</em>.github.io</strong>.</p>
            <div className="icon-container">
              <Octicon className="iconCheck" mega name="check" />
            </div>
          </li>
        </ul>
      </section>
    )
  }
  if (botonState === 2) {
    return (
      <section className="tutorial-container">
        <h1 className="tutorial-title">Ready to get started? Build your own site from scratch or generate one for your project.</h1>
        <h2 className="tutorial-subtitle">You get one site per GitHub account and organization, and unlimited project sites. Let‘s get started.</h2>

        <div className="btn-container">
          <button type="button" className={btn1Clase} onClick={eventoBtnPadre}>User or organization site</button>
          <button type="button" className={btn2Clase} onClick={eventoBtnPadre}>Project site</button>
        </div>
      </section>
    )
  }
}

export default Tutorial
