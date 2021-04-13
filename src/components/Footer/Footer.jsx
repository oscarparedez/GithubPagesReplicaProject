import React from 'react'
import Octicon from 'react-octicon'
import './styles/Footer.css'

const Footer = () => (

  <footer className="page-footer">

    <div className="footer-left">

      <div className="footer-left">
        <div className="left-container">
          <p className="footer-element registered">&copy; 2021 <span>GitHub</span>, Inc.</p>
          <a className="footer-element" href="https://docs.github.com/en/github/site-policy/github-terms-of-service">Terms</a>
          <a className="footer-element" href="https://docs.github.com/en/github/site-policy/github-privacy-statement">Privacy</a>
          <a className="footer-element" href="https://github.com/security">Security</a>
          <a className="footer-element" href="https://support.github.com">Contact</a>
        </div>
      </div>
    </div>

    <div className="footer-center">
      <a href="github.com">
        <Octicon className="iconGithub" mega name="mark-github" />
      </a>
    </div>

    <div className="footer-right">
      <div className="right-container">
        <a className="footer-element" href="https://www.githubstatus.com/">Status</a>
        <a className="footer-element" href="https://docs.github.com/rest">API</a>
        <a className="footer-element" href="https://training.github.com">Training</a>
        <a className="footer-element" href="https://shop.github.com">Shop</a>
        <a className="footer-element" href="https://github.blog">Blog</a>
        <a className="footer-element" href="https://github.com/about">About</a>
      </div>
    </div>

  </footer>
)

export default Footer
