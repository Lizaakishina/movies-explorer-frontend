import WebSite from "../WebSite/WebSite";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="list portfolio__flexbox">
        <li><WebSite title="Статичный сайт" link="https://github.com/Lizaakishina/how-to-learn"/></li>
        <li className="portfolio__line"></li>
        <li><WebSite title="Адаптивный сайт" link="https://github.com/Lizaakishina/russian-travel"/></li>
        <li className="portfolio__line"></li>
        <li><WebSite title="Одностраничное приложение" link="https://github.com/Lizaakishina/react-mesto-api-full"/></li>
      </ul>
    </section>
  )
}

export default Portfolio;