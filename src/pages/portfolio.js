import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import SEO from "../components/seo"

const PortfolioPage = () => (
  <>
    <SEO title="Portfolio" />
    <Header />
    <main id="portfolio">
      <div className="special-hero">
        <div className="special-hero__img-container">
        </div>
        <div className="special-hero__text-container">
          <h1 className="special-hero__text-container__title">
            Our Portfolio
          </h1>
        </div>
      </div>
      <div className="portfolio-section">
        <div className="portfolio-section__first">
          <div className="portfolio-section__first__img"></div>
          <div className="portfolio-section__first__text-container">
            <h3 className="portfolio-section__first__text-container__title">
              Fashion Website
            </h3>
          </div>
        </div>
        <div className="portfolio-section__second">
          <div className="portfolio-section__second__img"></div>
          <div className="portfolio-section__second__text-container">
            <h3 className="portfolio-section__second__text-container__title">
              Sports Online Shop
            </h3>
          </div>
        </div>
        <div className="portfolio-section__third">
          <div className="portfolio-section__third__img"></div>
          <div className="portfolio-section__third__text-container">
            <h3 className="portfolio-section__third__text-container__title">
              Web Application
            </h3>
          </div>
        </div>
        <div className="portfolio-section__fourth">
          <div className="portfolio-section__fourth__img"></div>
          <div className="portfolio-section__fourth__text-container">
            <h3 className="portfolio-section__fourth__text-container__title">
              Showcase Website
            </h3>
          </div>
        </div>
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
  </>
)

export default PortfolioPage
