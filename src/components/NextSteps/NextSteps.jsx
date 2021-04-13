import React from 'react'
import Octicon from 'react-octicon'
import './styles/NextSteps.css'

const NextSteps = () => (

  <section id="last-step">
    <h1 className="last-step-title">Now that you’re up and running, here are a few things you should know.</h1>

    <ul className="last-step-container">

      <li>
        <a className="icon-container" href="https://help.github.com/articles/using-jekyll-with-pages">
          <Octicon className="iconPencil" mega name="pencil" />
        </a>
        <p className="p-title"><a href="https://help.github.com/articles/using-jekyll-with-pages">Blogging with Jekyll</a></p>
        <p className="p-details">Using <a href="https://jekyllrb.com">Jekyll</a>, you can blog using beautiful Markdown syntax, and without having to deal with any databases. <a href="https://jekyllrb.com/docs/">Learn how to set up Jekyll</a>.</p>
      </li>

      <li>
        <a className="icon-container" href="https://help.github.com/articles/setting-up-a-custom-domain-with-pages">
          <Octicon className="iconLink" mega name="link" />
        </a>
        <p className="p-title"><a href="https://help.github.com/articles/setting-up-a-custom-domain-with-pages">Custom URLs</a></p>
        <p className="p-details">Want to use your own custom domain for a GitHub Pages site? Just create a file named CNAME  and include your URL. <a href="https://help.github.com/articles/setting-up-a-custom-domain-with-pages">Read more</a>.</p>
      </li>

      <li>
        <a className="icon-container" href="https://help.github.com/categories/20/articles">
          <Octicon className="iconBook" mega name="book" />
        </a>
        <p className="p-title"><a href="https://help.github.com/categories/20/articles">Guides</a></p>
        <p className="p-details">Learn how to create custom 404 pages, use submodules, and <a href="https://help.github.com/categories/20/articles">learn more about GitHub Pages</a>.</p>
      </li>
    </ul>
  </section>
)

export default NextSteps
