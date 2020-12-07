import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from "gatsby"
import Img from "gatsby-image"
const AboutBlurb = () => {
  const data = useStaticQuery(graphql`
    query {
      stacyCoding: file(relativePath: { eq:"stacyCoding.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      professionalPic: file(relativePath: { eq: "professionalPic.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="about-blurb">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>About Me</h3>
            <p>I am a relentless learner, and I believe in understanding all facets of the product I work on. I’m a dedicated and empathetic team player who leads with emotional intelligence, and delivers accordingly. Outside of coding, you may find me drawing. To some it may seem that I am doodling, but actually this is the way I think through complex questions, and cement the knowledge I’ve gained. By embracing my creativity I was able to succeed and become the talented Software Engineer that I am today. Shameless plug <a href="/">@Stacydraws</a></p>
            <div className="btn-row">
              <Link to="/work">View projects</Link>
            </div>
          </div>
          <div className="images">
            <div className="top-right">
              <Img fluid={data.stacyCoding.childImageSharp.fluid} />
            </div>
            <div className="bottom-left">
              <Img fluid={data.professionalPic.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
      <div className="black-box"></div>
      <div className="black-box overlay"></div>
    </div>
  )
}

export default AboutBlurb;