import WebSite from "../WebSite/WebSite";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__flexbox">
        <WebSite title="Статичный сайт" link="#" />
        <div className="portfolio__line"></div>
        <WebSite title="Адаптивный сайт" link="#" />
        <div className="portfolio__line"></div>
        <WebSite title="Одностраничное приложение" link="#" />
      </div>
    </section>
  )
}

export default Portfolio;