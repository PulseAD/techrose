import React from "react"
import { Link } from "gatsby"
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
    <Header />
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
      <div className="information">
        <p className="information__phone">555 666 333</p>
        <p className="information__email">techrose.web@gmail.com</p>
      </div>
      <div className="form">
        <form className="form__form">
          <label className="form__form__label-name">
            Name *
            <input type="text" className="form__form__name" name="name" required/>
          </label>
          <label className="form__form__label-email">
            Email *
            <input type="email" className="form__form__name" name="email" required/>
          </label>
          <label className="form__form__label-message">
            Message *
            <textarea className="form__form__message" name="message" required></textarea>
          </label>
          <button className="form__form__button" type="submit">
            Send
          </button>
        </form>
      </div>
      <div className="social">
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
    </main>
    <Footer />
  </>
)

export default ContactPage

export const query = graphql`
  {
    contact: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
