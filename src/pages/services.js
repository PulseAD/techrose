import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Img from "gatsby-image"

const ServicesPage = ({ data }) => (
  <>
    <SEO title="Services" />
    <Header className="header-black"/>
    <main id="services">
      <div className="hero">
        <div className="hero__img-container">
          <Img
            className="hero__img-container__image"
            fluid={data.services.childImageSharp.fluid}
          />
        </div>
        <div className="hero__text-container">
          <h1 className="hero__text-container__title">
            Learn what we offer at Techrose!
          </h1>
          <h2 className="hero__text-container__text">
            We have already helped both big and small business.
            Would you like to join the list of our satisfied clients?
            See what we can help you with at TechRose!
          </h2>
          <Link className="hero__text-container__cta cta" to="/portfolio">
            Discover our Portfolio
          </Link>
        </div>
      </div>
      <div className="outer">
        <div className="container ad">
          <h2 className="ad__sentence">
            Our services
          </h2>
        </div>
        <div className="container case-section">
          <div className="case-section__item case-section__first">
            <div className="case-section__img">
              <Img
                className="case-section__img__image"
                fluid={data.website.childImageSharp.fluid}
              />
            </div>
            <div className="case-section__text-container">
              <h3 className="case-section__text-container__title">
                Websites
              </h3>
              <p className="case-section__text-container__text">
                We will create a personalised website which will put you at
                an advantage on the market due to its modern design and great speed.
              </p>
            </div>
          </div>
          <div className="case-section__item case-section__second">
            <div className="case-section__img">
              <Img
                className="case-section__img__image"
                fluid={data.application.childImageSharp.fluid}
              />
            </div>
            <div className="case-section__text-container">
              <h3 className="case-section__text-container__title">
                Applications
              </h3>
              <p className="case-section__text-container__text">
                We will develop a web application that will allow you to register,
                order and analyse your data in a simple, and effective way.
              </p>
            </div>
          </div>
          <div className="case-section__item case-section__third">
            <div className="case-section__img">
              <Img
                className="case-section__img__image"
                fluid={data.ecommerce.childImageSharp.fluid}
              />
            </div>
            <div className="case-section__text-container">
              <h3 className="case-section__text-container__title">
                E-commerce
              </h3>
              <p className="case-section__text-container__text">
                We will create a fast and trendy online shop that
                will let you sell your products and services to a much higher number of customers.
              </p>
            </div>
          </div>
          <div className="case-section__item case-section__fourth">
            <div className="case-section__img">
              <Img
                className="case-section__img__image"
                fluid={data.computer.childImageSharp.fluid}
              />
            </div>
            <div className="case-section__text-container">
              <h3 className="case-section__text-container__title">
                Posters and Banners
              </h3>
              <p className="case-section__text-container__text">
                We will design a creative and appealing poster or a banner
                that will advertise your products, services or special occassions.
              </p>
            </div>
          </div>
        </div>
        <div className="container end-of-page">
        <Link className="hero__text-container__cta cta" to="/portfolio">
          Discover our Portfolio
        </Link>
      </div>
      </div>
    </main>
    <Footer />
  </>
)

export default ServicesPage

export const query = graphql`
  {
    services: file(relativePath: { eq: "services.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 900, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    website: file(relativePath: { eq: "website.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    application: file(relativePath: { eq: "application.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ecommerce: file(relativePath: { eq: "ecommerce.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    computer: file(relativePath: { eq: "computer.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
