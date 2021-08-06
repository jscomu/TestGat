import * as React from "react"
//import { Link, graphql } from "gatsby"
import { graphql } from "gatsby"

//import Layout from "../components/Layout"
//import SEO from "../components/Seo"
//import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = ({ location, data }) => (
  <Layout location={location} title={data.site.siteMetadata.title}>
    <Seo title="About" />
    <h1>About Me</h1>
    <p>사진</p>
    <p>
        안녕하세요<br/>
        다양한 정보를 공유하는 블로그입니다.
    </p>
    <p>정보 공유</p>
  </Layout>
)

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`