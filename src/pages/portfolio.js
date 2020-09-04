import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import Img from "gatsby-image"
import SEO from "../components/seo"
import "./contact.css"
import "./portfolio.css"

const PortfolioPage = ({ data }) => (
  <>
    <SEO title="Portfolio" />
    <Header color="#fff" />
    <main id="portfolio">
      <div className="special-hero">
        <div className="special-hero__img-container">
          <Img
            className="hero__img-container__image"
            fluid={data.portfolio.childImageSharp.fluid}
          />
        </div>
        <div className="special-hero__text-container">
          <h1 className="special-hero__text-container__title">
            Our<br /> Portfolio
          </h1>
        </div>
      </div>
      <div className="portfolio-section">
        <div className="portfolio-section__first">
          <div className="portfolio-section__first__img">
            <Img
              className="portfolio-section__first__img__image"
              fluid={data.clothes.childImageSharp.fluid}
            />
          </div>
          <div className="portfolio-section__first__text-container">
            <h3 className="portfolio-section__first__text-container__title">
              Fashion Website
            </h3>
          </div>
        </div>
        <div className="portfolio-section__second">
          <div className="portfolio-section__second__img">
            <Img
              className="portfolio-section__first__img__image"
              fluid={data.shop.childImageSharp.fluid}
            />
          </div>
          <div className="portfolio-section__second__text-container">
            <h3 className="portfolio-section__second__text-container__title">
              Sports Online Shop
            </h3>
          </div>
        </div>
        <div className="portfolio-section__third">
          <div className="portfolio-section__third__img">
            <Img
              className="portfolio-section__first__img__image"
              fluid={data.coding.childImageSharp.fluid}
            />
          </div>
          <div className="portfolio-section__third__text-container">
            <h3 className="portfolio-section__third__text-container__title">
              Web Application
            </h3>
          </div>
        </div>
        {/* <div className="portfolio-section__fourth">
          <div className="portfolio-section__fourth__img"></div>
          <div className="portfolio-section__fourth__text-container">
            <h3 className="portfolio-section__fourth__text-container__title">
              Showcase Website
            </h3>
          </div>
        </div> */}
      </div>
      <div className="end-of-page">
        <h3 className="end-of-page__ad">
          Do you like what we do?
        </h3>
        <a className="end-of-page__cta cta" href="#">
          Contact Us
        </a>
      </div>
    </main>
    <Footer />
  </>
)

export default PortfolioPage

export const query = graphql`
  {
    portfolio: file(relativePath: { eq: "portfolio.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clothes: file(relativePath: { eq: "clothes.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    shop: file(relativePath: { eq: "shop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    coding: file(relativePath: { eq: "coding.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`