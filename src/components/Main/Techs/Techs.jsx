import Title from "../../Title/Title";
import "./Techs.css";
import { memo } from "react";

const Techs = () => {
  return (
    <section className="techs" id="techs">
      <Title title = "Технологии" />
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className="techs__flex-container">
        <ul className="list techs__flexbox">
          <li className="techs__item">
            <div className="techs__technology">HTML</div>
          </li>
          <li className="techs__item">
            <div className="techs__technology">CSS</div>
          </li>
          <li className="techs__item">
            <div className="techs__technology">JS</div>
          </li>
          <li className="techs__item">
            <div className="techs__technology">React</div>
          </li>
          <li className="techs__item">
            <div className="techs__technology">Git</div>
          </li>
          <li className="techs__item">
            <div className="techs__technology">Express.js</div>
          </li>
          <li className="techs__item">
            <div className="techs__technology">mongoDB</div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default memo(Techs);