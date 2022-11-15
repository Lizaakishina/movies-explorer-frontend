import './Main.css';
import Header from '../Header/Header';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';

const Main = () => {
  return (
    <main className="main__page">
      <Header />
      <Promo />
      <AboutProject />
      <Techs />
    </main>
  )
}

export default Main;