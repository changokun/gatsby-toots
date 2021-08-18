// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Da Home Page">
      <p>I’m making this by following the Gatsby Tutorial.</p>
      <StaticImage src="https://pbs.twimg.com/card_img/1427631039896293386/q2KQa0kl?format=jpg&name=small"></StaticImage>
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage