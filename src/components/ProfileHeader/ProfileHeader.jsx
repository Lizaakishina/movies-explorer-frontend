import "./ProfileHeader.css";
import logo from "../../images/logo.png";
import chel from "../../images/chel.png";

const ProfileHeader = () => {
  return (
    <section className="profileHeader">
      <a className="link profileHeader__link_type_logo>" href="#">
        <img src={logo} className="profileHeader__logo" alt='логотип' />
      </a>
      <div className="profileHeader__movieslist">
        <a className="link profileHeader__movielink" href="#">Фильмы</a>
        <a className="link profileHeader__movielink" href="#">Сохраненные фильмы</a>
      </div>
      <div className="profileHeader__navigation">
        <a className="link profileHeader__link" href="#">Аккаунт</a>
        <div className="profileHeader__chelbox">
            <img src={chel} className="profileHeader__chel" alt='человечек' />
        </div>
      </div>
    </section>
  )
}

export default ProfileHeader;