import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql} from 'gatsby'

const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
      main: file(relativePath: { eq: "main.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      right: file(relativePath: { eq: "right.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shortLeft: file(relativePath: { eq: "shortLeft.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="sideImage left">
                        <Img fluid={data.shortLeft.childImageSharp.fluid} /> 
                    </div>
                    <div className="mainText">...Developer...</div>
                    <div className="mainImage">
                        <Img fluid={data.main.childImageSharp.fluid} /> 
                    </div>
                    <div className="sideImage right">
                        <Img fluid={data.right.childImageSharp.fluid} /> 
                    </div>
                </div>
                <div className="scroll">
                    <span>Scroll Drown</span>
                </div>
            </div>
        </div>
    )
}

export default Banner;