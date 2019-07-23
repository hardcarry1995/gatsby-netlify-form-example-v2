import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

export default function Index() {
  return (
    <div>
      <h1>Hi people</h1>
      <p>This is an example site integrating Netlify’s form handling with Gatsby</p>
      <ul>
        <li>
          <Link to="/contact/">Basic contact form</Link>
        </li>
        <li>
          <Link to="/file-upload/">Form with file upload</Link>
        </li>
        <li>
          <Link to="/recaptcha/">Form with reCAPTCHA 2</Link>
        </li>
        <li>
          You can also{' '}
          <a href="https://github.com/snipcart/gatsby-netlify-serverless/blob/master/functions/fetchreviews.js#L23">
            programmatically retrieve data
          </a>
          .
        </li>
      </ul>
    </div>
  )
}
