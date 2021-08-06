import * as React from "react"
//import { Link, graphql } from "gatsby"
import { graphql } from "gatsby"

//import Layout from "../components/Layout"
//import SEO from "../components/Seo"
//import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import imgA from '../images/sunset.jpg';

const AboutPage = ({ location, data }) => (
  <Layout location={location} title={data.site.siteMetadata.title}>
    <Seo title="About" />
    <h1>About Me</h1>
    <p><img src={ require('/brg.jpg') } /></p>
    <p>
        안녕하세요<br/>
        다양한 정보를 공유하는 블로그입니다.
    </p>
    <p>급변하는 시대에서 필요한 기술을 접목하여 새로운 가치를 창출할 수 있도록 노력합니다.</p>
    <p>지식을 공유하고 더 나은 방향으로 나아가는 것을 추구합니다.</p>
    <p><img src={imgA} /></p>
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