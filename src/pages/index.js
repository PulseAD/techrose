import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Img from "gatsby-image"
import './index.css'

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <Header color="#fff"/>
    <main id="home">
      <div className="hero">
        <div className="hero__img-container">
          <Img
            className="hero__img-container__image"
            fluid={data.home.childImageSharp.fluid}
          />
        </div>
        <div className="hero__text-container">
          <h1 className="hero__text-container__title">
            Stand out from the digital crownd with TechRose!
          </h1>
          <h2 className="hero__text-container__text">
            In need of a trendy, fast and personalised website
            or a mobile application at an affordable price?
          </h2>
          <Link className="hero__text-container__cta cta" to="/portfolio">
            Discover our Portfolio
          </Link>
        </div>
      </div>
      <div className="outer">
        <div className="container ad">
          <h2 className="ad__sentence">
            We will Help your Business Flourish!
          </h2>
        </div>
        <div className="case-section container">
          <div className="case-section__item case-section__first">
            <div className="case-section__img">
              <Img
                className="case-section__img__image"
                fluid={data.profit.childImageSharp.fluid}
              />
            </div>
            <div className="case-section__text-container">
              <h3 className="case-section__text-container__title">
                Increasing your Profit
              </h3>
              <p className="case-section__text-container__text">
                We will advertise your products  and services to increase your profit.
                We don't only produce websites or applications, we add real value to your business.
              </p>
            </div>
          </div>
          <div className="case-section__item case-section__second">
            <div className="case-section__img">
              <Img
                className="case-section__img__image"
                fluid={data.appealing.childImageSharp.fluid}
              />
            </div>
            <div className="case-section__text-container">
              <h3 className="case-section__text-container__title">
                Making your Business Appealing
              </h3>
              <p className="case-section__text-container__text">
                We will produce  a modern and elegant design for your website or application.
                This will highlight the appeal of products and services that your company offers.
              </p>
            </div>
          </div>
          <div className="case-section__item case-section__third">
            <div className="case-section__img">
              <Img
                className="case-section__img__image"
                fluid={data.business.childImageSharp.fluid}
              />
            </div>
            <div className="case-section__text-container">
              <h3 className="case-section__text-container__title">
                Keeping your Customers Interested
              </h3>
              <p className="case-section__text-container__text">
                You won't lose any impatient customer.
                We use the latest technologies to provide fast websites and applications.
              </p>
            </div>
          </div>
        </div>
        <div className="end-of-page container">
        <Link className="end-of-page__cta cta" to="/portfolio">
          Discover our Portfolio
        </Link>
      </div>
      </div>
    </main>
    <Footer />
  </>
)

export default IndexPage

export const query = graphql`
  {
    home: file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    profit: file(relativePath: { eq: "profit.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 650, quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    appealing: file(relativePath: { eq: "appealing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 650, quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    business: file(relativePath: { eq: "business.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 650, quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
