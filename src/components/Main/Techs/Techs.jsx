import Title from "../../Title/Title";
import Technology from "../../Technology/Technology";
import "./Techs.css";

const Techs = () => {
  return (
    <section className="techs">
      <Title title = "Технологии" />
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className="techs__flex-container">
        <ul className="list techs__flex">
          <li className="techs__item"><Technology technology="HTML" /></li>
          <li className="techs__item"><Technology technology="CSS" /></li>
          <li className="techs__item"><Technology technology="JS" /></li>
          <li className="techs__item"><Technology technology="React" /></li>
          <li className="techs__item"><Technology technology="Git" /></li>
          <li className="techs__item"><Technology technology="Express.js" /></li>
          <li className="techs__item"><Technology technology="mongoDB" /></li>
        </ul>
      </div>
    </section>
  )
}

export default Techs;