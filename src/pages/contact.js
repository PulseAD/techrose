import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Img from "gatsby-image"
import "./contact.css"
import Facebook from "../images/facebook.svg"
import Twitter from "../images/twitter.svg"
import Insta from "../images/insta.svg"
import Dribbble from "../images/dribbble.svg"

const ContactPage = ({ data }) => (
  <>
    <SEO title="Contact" />
    <Header className="header-black"/>
    <main id="contact">
      <div className="special-hero">
        <div className="special-hero__img-container">
          <Img
            className="hero__img-container__image"
            fluid={data.contact.childImageSharp.fluid}
          />
        </div>
        <div className="special-hero__text-container">
          <h1 className="special-hero__text-container__title">
            Contact<br /> Us!
          </h1>
        </div>
      </div>
      <div className="ad">
        <h3 className="ad__sentence">
          It is Time to Make your Wonderful Ideas Come True!
        </h3>
      </div>
      <div className="outer">
        <div className="container information">
          <p className="information__phone">
            <a href="tel:555666333">555 666 333</a>
          </p>
          <p className="information__email">
            <a href="mailto:techrose.web@gmail.com">techrose.web@gmail.com</a>
          </p>
        </div>
        <div className="container form">
          <form className="form__form">
            <label className="form__form__label-name" htmlFor="name">
              Name *
              <input type="text" className="form__form__name" name="name" id="name" required/>
            </label>
            <label className="form__form__label-email" htmlFor="email">
              Email *
              <input type="email" className="form__form__name" name="email" id="email" required/>
            </label>
            <label className="form__form__label-message" htmlFor="msg">
              Message *
              <textarea className="form__form__message" name="message" id="msg" required></textarea>
            </label>
            <button className="form__form__button" type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="container social">
        <div className="social__facebook">
          <img alt="facebook logo" src={Facebook} />
        </div>
        <div className="social__twitter">
          <img alt="twitter logo" src={Twitter} />
        </div>
        <div className="social__instagram">
          <img alt="instagram logo" src={Insta} />
        </div>
        <div className="social__dribbble">
          <img alt="dribbble logo" src={Dribbble} />
        </div>
      </div>
      </div>
    </main>
    <Footer />
  </>
)

export default ContactPage

export const query = graphql`
  {
    contact: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 65) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
