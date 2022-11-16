import "./Footer.css";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section className="footer">
      <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__line"></div>
      <div className="footer__flexbox">
        <p className="footer__copyright">&#169; {date}</p>
        <div className="footer__yandex">
          <p className="footer__text">Яндекс.Практикум</p>
          <a className="footer__link" href="https://github.com/yandex-praktikum" target="_blank">Github</a>
        </div>
      </div>
    </section>
  )
}

export default Footer;